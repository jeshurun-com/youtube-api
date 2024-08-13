fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=UUWr0mx597DnSGLFk1WfvSkQ&key=AIzaSyAXepgz7hf27r3wCilGULIpGszcmXRB99g')
.then(response => response.json())
.then(data=>{
    console.log(data.items[0]);
})