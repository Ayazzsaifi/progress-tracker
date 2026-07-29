const topicLog = document.getElementById("topic-log");
const notesLog = document.getElementById("notes-log");
const SubmitBtn = document.getElementById("submit-log");

SubmitBtn.addEventListener("click", async function () {
    const topic = topicLog.value
    const notes = notesLog.value
    try {
        const response = await fetch("https://progress-tracker-706k.onrender.com/api/session/Create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({ topic, notes })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})
async function getSession() {
    try {
        const response = await fetch("https://progress-tracker-706k.onrender.com/api/session/all", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        const { data } = await response.json()
        console.log(data)

        const pastSession = document.getElementById("past-session")
        data.forEach(function (session) {
            const div = document.createElement("div")
            div.className = "session-card"
            div.innerHTML = `
        <h3>${session.topic}</h3>
        <p>${session.notes}</p>
        <p>${session.date}</p>
    `
            pastSession.appendChild(div)
        })

        // streak
        const streak = calculateStreak(data)
        document.getElementById("streak").textContent = "🔥 Streak: " + streak + " days"
    }
    catch (error) {
        console.log(error)
    }
}
getSession()

function calculateStreak(sessions) {
    const dates = sessions.map(function (s) {
        return new Date(s.date).toISOString().split("T")[0]
    })
    const uniqueDates = [...new Set(dates)]
    const sorted = uniqueDates.sort(function (a, b) {
        if (b > a) {
            return 1;
        } else {
            return -1;
        }
    })
    let streak = 0
    let today = new Date()

    for (let i = 0; i < sorted.length; i++) {
        const expected = new Date(today.setDate(today.getDate() - i)).toISOString().split("T")[0]
    if (sorted.includes(expected)) {
            streak++
        } else {
            break
        }
    }
    return streak
}