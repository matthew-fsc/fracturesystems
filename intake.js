/* Prospect intake.

   INTAKE_URL is the Fracture OS endpoint: POST /intake on
   matthew-fsc/fracture-factory-orchestrator. Leave it empty until that
   service is deployed. An empty value opens a mailto instead of calling
   the network. No third-party form host is used.

   Body, JSON:
   {
     "name": string,
     "firm": string,
     "email": string,
     "firmType": "bank" | "wealth-manager" | "fund-administrator"
       | "insurance-accounting-advisory" | "pe-platform-or-family-office"
       | "other",
     "whatChanged": string,
     "systemsInUse": string
   }
*/
const INTAKE_URL = "";

(function () {
  var MAIL = "mailto:matthew@fracturesystems.com";
  var form = document.getElementById("intake-form");
  if (!form) return;

  var status = document.getElementById("intake-status");
  var button = form.querySelector("button[type=submit]");

  function text(name) {
    var field = form.elements[name];
    return field ? String(field.value || "").trim() : "";
  }

  function body() {
    return {
      name: text("name"),
      firm: text("firm"),
      email: text("email"),
      firmType: text("firmType"),
      whatChanged: text("whatChanged"),
      systemsInUse: text("systemsInUse")
    };
  }

  function mailto(fields) {
    var lines = [
      "Name: " + fields.name,
      "Firm: " + fields.firm,
      "Email: " + fields.email,
      "Firm type: " + fields.firmType,
      "",
      "What changed:",
      fields.whatChanged,
      "",
      "Systems in use:",
      fields.systemsInUse
    ];
    return MAIL + "?subject=" + encodeURIComponent("Prospect intake") +
      "&body=" + encodeURIComponent(lines.join("\n"));
  }

  function setStatus(message, state) {
    status.dataset.state = state || "";
    status.textContent = message || "";
  }

  function thank() {
    setStatus("Received. We will reply from matthew@fracturesystems.com.", "ok");
    button.disabled = true;
  }

  form.addEventListener("submit", function (event) {
    if (!form.reportValidity()) return;
    event.preventDefault();

    if (text("website")) {
      thank();
      return;
    }

    var fields = body();
    var endpoint = String(INTAKE_URL || "").trim();

    if (!endpoint) {
      var href = mailto(fields);
      setStatus("", "ok");
      status.textContent = "Your email app should open with this note. If it does not, ";
      var link = document.createElement("a");
      link.href = href;
      link.textContent = "open the email";
      status.appendChild(link);
      status.appendChild(document.createTextNode("."));
      button.disabled = true;
      window.location.href = href;
      return;
    }

    button.disabled = true;
    setStatus("Sending.", "");

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(fields)
    }).then(function (response) {
      if (!response.ok) throw new Error(String(response.status));
      thank();
    }).catch(function () {
      button.disabled = false;
      setStatus("", "error");
      status.textContent = "That did not send. ";
      var link = document.createElement("a");
      link.href = mailto(fields);
      link.textContent = "Email it instead";
      status.appendChild(link);
      status.appendChild(document.createTextNode("."));
    });
  });
})();
