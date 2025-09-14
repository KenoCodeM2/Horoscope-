document.querySelector("#super").addEventListener("click", zodiac)

function zodiac() {
    const input = document.querySelector("#month").value.toLowerCase();
    const day = document.querySelector("#date").value.toLowerCase();
    

    console.log(input)  // Capricorn: Dec 22 - Jan 19
    if (input === "december" && day >= 22 && day <= 31 ||
        input === "january" && day >= 1 && day <= 19) {
        document.querySelector("#tag").innerText = "Capricorn ♑️"



        // Aquarius: Jan 20 - Feb 18
    } else if (input === "january" && day >= 20 && day <= 31 ||
        input === "feburary" && day >= 1 && day <= 18) {
        document.querySelector("#tag").innerText = "Aquarius ♒️"

    }
    // Pisces: Feb 19 - Mar 20
    else if (input === "feburary" && (day >= 19 && day <= 29) ||
        input === "march" && day >= 1 && day <= 20) {
        document.querySelector("#tag").innerText = "Pisces ♓️"
    }

    // Aries: Mar 21 - Apr 19
    else if (input === "march" && day >= 21 && day <= 31 ||
        input === "april" && day >= 1 && day <= 19) {
        document.querySelector("#tag").innerText = "Aries ♈️"
    }
    // Taurus: Apr 20 - May 20
    else if (input === "april" && day >= 20 && day <= 30 ||
        input === "may" && day >= 1 && day <= 20) {
        document.querySelector("#tag").innerText = "Taurus ♉️"
    }
    // Gemini: May 21 - Jun 20
    else if (input === "may" && day >= 21 && day <= 31 ||
        input === "june" && day >= 1 && day <= 20) {
        document.querySelector("#tag").innerText = "Gemini ♊️"
    }

    // Cancer: Jun 21 - Jul 22
    else if (input === "june" && day >= 21 && day <= 30 ||
        input === "july" && day >= 1 && day <= 22) {
        document.querySelector("#tag").innerText = "Cancer ♋️"
    }

    // Leo: Jul 23 - Aug 22
    else if (input === "july" && day >= 23 && day <= 31 ||
        input === "august" && day >= 1 && day <= 22) {
        document.querySelector("#tag").innerText = "Leo ♌️"
    }
    // Virgo: Aug 23 - Sep 22
    else if (input === "august" && day >= 23 && day <= 31 ||
        input === "september" && day >= 1 && day <= 22) {
        document.querySelector("#tag").innerText = "Virgo ♍️"
    }
    // Libra: Sep 23 - Oct 22
    else if (input === "september" && day >= 23 && day <= 30 ||
        input === "october" && day >= 1 && day <= 22) {
        document.querySelector("#tag").innerText = "Libra ♎️"
    }
    // Scorpio: Oct 23 - Nov 21
    else if (input === "october" && day >= 23 && day <= 31 ||
        input === "november" && day >= 1 && day <= 21) {
        document.querySelector("#tag").innerText = "Scorpio ♏️"
    }
    // Sagittarius: Nov 22 - Dec 21
    else if (input === "november" && day >= 22 && day <= 30 ||
        input === "december" && day >= 1 && day <= 21) {
        document.querySelector("#tag").innerText = "Sagittarius ♐️ "

    } else
        document.querySelector("#tag").innerText = "Please Enter Birth Date"

}
