const topicLog= document.getElementById("topic-log");
const notesLog= document.getElementById("notes-log");
const SubmitBtn= document.getElementById("submit-log");

SubmitBtn.addEventListener("click",async function(){
    const topic=topicLog.value
    const notes=notesLog.value
    try {
    const response = await fetch("http://localhost:3000/api/session/Create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({ topic, notes })
    })
    const data = await response.json()
    console.log(data)
} catch(error) {
    console.log(error)
}
})

async function getSession() {
    try {
        const response = await fetch("http://localhost:3000/api/session/all", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        const { data } = await response.json()
        console.log(data)

        // Displaying data
        const pastSession = document.getElementById("past-session")
        data.forEach(function(session) {
    const div = document.createElement("div")
    div.className = "session-card"   // ← add this line here
    div.innerHTML = `
        <h3>${session.topic}</h3>
        <p>${session.notes}</p>
        <p>${session.date}</p>
    `
    pastSession.appendChild(div)
})
    }
    catch(error) {
        console.log(error)
    }
}
getSession()