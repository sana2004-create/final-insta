 let currentPage = 1 ;
   let lastPage = 1 ;
    let basseUrl ="https://tarmeezacademy.com/api/v1"

   window.addEventListener("scroll",function(){
        let endOfPage =  window.innerHeight + window.pageYOffset >= document.body.scrollHeight;
       
       if(endOfPage  && currentPage < lastPage){
        currentPage = currentPage + 1
        getPosts(false,currentPage)
       }

   })
   


setUpUi()
 
   function createcommentclick(){
       let commentBody =document.getElementById("comment-input").value
      let params = {
        "body": commentBody
      }
      let token = localStorage.getItem("token")
      let  baseUrl ="https://tarmeezacademy.com/api/v1"
      let url = `${baseUrl}/posts/${id}/comments`
      axios.post(url,params,{
        headers : {
          "authorization" : `Bearer ${token}`
        }
      })
      .then((response)=>{
        showAlertt("add comment successfully","success")
        getPosts()
      })
  }
 
  getPosts()
   
// function getPosts(){
//      toggelloading(true)
//   axios.get("https://tarmeezacademy.com/api/v1/posts")
//   .then(function (response) {
  
//   let posts = response.data.data ;
//    lastPage = response.data.meta.last_page ;
  
//   // this if for relod the post withot functionhilling
//   if(relode){
//      document.getElementById("posts").innerHTML ="" ;
//     }
//    let postTitle = ""
//   for(post of posts){
//     let author = post.author
// //  show or hide botton
// let user = getcurrentUser()
// let isMyPost = user != null && post.author.id === user.id

 
// let  editbuttonContent = ``

// if(isMyPost){
//  editbuttonContent = `
//     <button class="btn btn-secondary" style="float:right" onClick="editpostBtnclick('${encodeURIComponent(JSON.stringify(post))}')">Edit</button>
//     <button class="btn btn-danger" style="float:right" onClick="DelitepostBtnclick('${encodeURIComponent(JSON.stringify(post))}')">Delite</button>
 
//  `
//     }
//     if( post.title != null){
//       postTitle = post.title
//     }
//    let content =`
//    <div class="card shadow my-2"  >
//               <div class="card-header">
//                 <span onClick="userClicked(${author.id})" style="cursor:pointer">
                
//                 <img src=${author.profile_image} alt="" style="width: 40px;height: 40px;" class="rounded-circle border border-3" >
//                 <b>${author.username}</b>
//                  ${editbuttonContent}
//                 </div>
//               </span>
             
//               <div class="card-body" onClick ="postClick(${post.id})" style="cursor: pointer">
//                  <img src=${post.image} alt="" class="w-100 " >
//                  <p style="color: rgb(118, 118, 118);font-size: smaller;" class="mt-1">
               
//                  <div style="display: flex;">
//                    <div style="width: 50%;margin-top: -4px;">
//                     <div style="float: left;width:15%;">
                              
//     <div class="icons" id="icons-div">
//       <div class="left-icons" >
//         <!-- قلب -->
//         <input type="checkbox" id="like" >
       
//           <span class="material-symbols-outlined" for="like">favorite</span>
 

//         <!-- تعليق -->
//         <span class="material-symbols-outlined">chat_bubble</span>

//         <!-- مشاركة -->
//         <span class="material-symbols-outlined">cached</span>

//         <!-- إرسال -->
//         <span class="material-symbols-outlined">send</span>
//       </div>

//       <!-- حفظ -->
//       <input type="checkbox" id="save">
//       <label for="save">
//         <span class="material-symbols-outlined">bookmark</span>
//       </label>
//     </div>
//                     </div>
//                   </div>
                
//                   <hr>
//                  </div>
//                  <hr style="margin-top: -5px;">
//                </div>
//                 <div style="float: right;width:100%;justify-content: end;display: flex;margin-top: -20px;font-size: smaller;">
//                <p> ${post.created_at}</p>
              
//                </div>
//                <h3 style="margin-bottom: 20px;margin-top:-10px;"> ${postTitle}</h3>
//                <p style="margin-top:-10px;">
//                ${post.body}
//                </p>
//                <p>
              
//                </p>
              
//                 <div style="float: right;width:100%;justify-content: start;display: flex;font-size: smaller;">
//                    <p> ${post.comments_count} coments</p>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
//                     <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
//                    </svg>
//                   <span id="btn-tags">
                    
//                     <button class="btn btn-sm rounded-5" style="background-color:gray;color:white" >
//                     ${author.email}
//                      </button>
                     
//                      </span>
                 
//               </div>
                
//               <div>
//               </div>
//               </div>
//    `
//      document.getElementById("posts").innerHTML+= content;
//      let  currentPostTagId = `btn-tags-${post.id}`
//       // document.getElementById(currentPostTagId).innerHTML = ""
//    console.log('the current is',currentPostTagId)
//     for (tag of post.tags){
    
//       console.log(post.tags)
//       console.log('tag is',tag.name)
//       let tagontent = `

//                     <button class="btn btn-sm rounded-5" style="background-color:gray;color:white" >
//                       ${tag.name}
//                      </button>
                     
//       `
//        document.getElementById(currentPostTagId).innerHTML = tagontent ;
//      }
//   }
  
//   })
//   .catch(function (error) {
//     // handle error 
//     console.log(error);
//   })
//   .finally(()=>{
//     toggelloading(false)
//   })

//   }


function getPosts(){
  const Id = getcurrentuserId();
  axios.get(`https://tarmeezacademy.com/api/v1/users/${Id}/posts`)
    .then(response => {
      const posts = response.data.data;
      const container = document.getElementById("user-posts");
      container.innerHTML = "";

      posts.forEach(post => {
        const author = post.author;
        const user = getcurrentUser();
        const isMyPost = user && user.id == Id;

        const editDeleteButtons = isMyPost ? `
           <div>
                <span class="material-symbols-outlined"   style="float:right;color:#90EE90;margin-left:15px" onClick="editpostBtnclick('${encodeURIComponent(JSON.stringify(post))}')">
stylus
</span>
    <span class="material-symbols-outlined" style="float:right;color:#FF0000" onClick="DelitepostBtnclick('${encodeURIComponent(JSON.stringify(post))}')">
delete
</span>
            </div>
        
        ` : ``;

        const postTitle = post.title || "";

        const content = `
          <div class="card shadow my-2">
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center;">
              <span  style="cursor:pointer; display:flex; align-items:center;">
                <img onClick="userClicked(${author.id})" src="${author.profile_image}" alt="" style="width:40px;height:40px;" class="rounded-circle border border-3">
                <b style="margin-left:8px;">${author.username}</b>
              </span>
              ${editDeleteButtons}
            </div>
            <div class="card-body" style="cursor:pointer" onClick="postClick(${post.id})">
              <img src="${post.image}" alt="" style= "width:100%;heigh:10px">
           
            </div>
                         
<div class="icons" id="icons-div" style="display: flex;width: 100%;">
   <div id="iconsleft" style="float: right;width: 90%;" >
 
    
  <input type="checkbox" id="like" >
  <label for="like">
    <span class="material-symbols-outlined">favorite</span>
  </label>
  <!-- مشاركة -->
  <input type="checkbox" id="share">
  <label for="share">
    <span class="material-symbols-outlined">cached</span>
  </label>
    <!-- تعليق -->
  <input type="checkbox" id="comment">
  <label for="comment">
    <span class="material-symbols-outlined">chat_bubble</span>
  </label>
  <!-- إرسال -->
  <input type="checkbox" id="send">
  <label for="send">
    <span class="material-symbols-outlined">send</span>
  </label>
   </div>
   <div  style="float: left;width: 100%;align-content:flex-end;display: flex;direction:ltr ;">
      <!-- حفظ -->
  <input type="checkbox" id="save">
  <label for="save">
    <span class="material-symbols-outlined">bookmark</span>
  </label>
</div>
   </div>
  <hr style="margin-top: -5px;">


             
              
                <div style="float: right;width:100%;justify-content: end;display: flex;margin-top: -20px;font-size: smaller;">
                 <p> ${post.created_at}</p>
              
                </div>
               <h3 style="margin-bottom: 20px;margin-top:-10px;"> ${postTitle}</h3>
               <p style="margin-top:-10px;">
               ${post.body}
               </p>
             
              
                <div style="float: right;width:100%;justify-content: start;display: flex;font-size: smaller;">
                   <p> ${post.comments_count} coments</p>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                   </svg>
                  <span id="btn-tags">
                    
                    <button class="btn btn-sm rounded-5" style="background-color:gray;color:white" >
                    ${author.email}
                     </button>
                     
                   </span>
                 
              </div>
                
         </div>
        `;
        container.innerHTML += content;
      });
    })
    .catch(error => console.log(error))
}



function toggelloading(show = true){
 if (show){
 document.getElementById("loader").style.visibility = 'visible'
  }else{
     document.getElementById("loader").style.visibility = 'hidden'
  }
}



function logOut() {
   localStorage.removeItem("token")
    localStorage.removeItem("user")
      showAlertt("Logged out success","danger")
      setUpUi()
  }
   
  function loginbtnClicked(){
      toggelloading(true)
       const username =document.getElementById("username-input").value ;
       const  password =document.getElementById("password-input").value;
       localStorage.setItem("username",username)
         localStorage.setItem("password",password)
         console.log("saved to local storage")
       const params ={
               "username" : username ,
               "password" : password ,
       }
       console.log(params.password)
       const url ="https://tarmeezacademy.com/api/v1/login"
       axios.post("https://tarmeezacademy.com/api/v1/login",
        {
               "username" : username ,
              "password" : password ,
            
       }
       )
       .then((response)=>{
       
        localStorage.setItem("username",response.data.user.username)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("user",JSON.stringify(response.data.user))
        const modal = document.getElementById("exampleModal");
        const modalIntance = bootstrap.Modal.getInstance(modal);

        modalIntance.hide()
           showAlertt("Logged in success",'success')
          setUpUi()
         
       })
      // 
       .catch((error)=>{
    console.log("the error is", error);
    if (error.response) {
        console.log("Error response data:", error.response.data);
       }
})
.finally(()=>{
  toggelloading(false)
})
      
        
   }
    function registerBtnClicked(){
      toggelloading(true)
        showAlertt( "user Registered Successfully","success")
      const  name=document.getElementById("regester-name").value;
       const  username=document.getElementById("regester-username").value;
      const image =document.getElementById("regester-imginput").files[0] ;
      const password =document.getElementById("regester-password").value;
      const token = localStorage.setItem("token",username) 
      
    
        const formdata = new FormData()
        formdata.append("name",name)
        formdata.append("username",username)
        formdata.append("password",password)
        formdata.append("image",image)
      
      
        
       axios.post("https://tarmeezacademy.com/api/v1/register",

       formdata
       )
       .then((response)=>{
        
        console.log(response.data)
        alert("true")
     
        const modal = document.getElementById("exampleModal2");
        const modalIntance = bootstrap.Modal.getInstance(modal);
        modalIntance.hide()
        getPosts()
       setUpUi()
   
       })
      
       .catch((error)=>{
        const message =error.response.data
        alert("error")
        showAlertt(message,"danger")
        setUpUi()
          modalIntance.hide()
   
     } )
      .finally(()=>{
       toggelloading(false)
       })
      }

  
   function showAlertt(customMessage,type)
   {
    
    const alertPlaceholder = document.getElementById('success-alert')
    const appendAlert = (message, type) => {
   const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)


}
// HIDE ALERT
   appendAlert(customMessage, type)
   setTimeout(()=>{
    const alertToHide = bootstrap.Alert.getOrCreateInstance('#success-alert');
    alertToHide.close()
   },2000)



   }
   function setUpUi(){
  
    // const username=localStorage.getItem("username")
    let token =localStorage.getItem("token")
    // let userName = document.getElementById("usernameloged")
    let loginbtn = document.getElementById("loginbtn")
    let regestbtn =document.getElementById("regestbtn")
    let logoutbtn =document.getElementById("logOut-div")
    //  add btn
    let addbtn =document.getElementById("add-btn")
      console.log(token)
    if(token == null) //user is guest (not logged in)
    {
     loginbtn.style.visibility = "visible"
     regestbtn.style.visibility = "visible"
     logoutbtn.style.setProperty("display","none","important") 
      addbtn.style.setProperty("display","none","important")
   
    }else{  //for loged in user
     loginbtn.style.visibility = "hidden";
     regestbtn.style.visibility = "hidden";
    logoutbtn.style.setProperty("display","flex","important") 
    addbtn.style.setProperty("display","flex","important")
     
     let user = getcurrentUser()
     document.getElementById("nav-username").innerHTML = user
     console.log('the user in setupui is',user)
     document.getElementById("nav-user-img").src = user.profile_image
    //  
   
    }
   }
   function getcurrentUser(){
    let user = null
    let storagrUser = localStorage.getItem("user")
  
    if(storagrUser != null){
      user = JSON.parse(storagrUser)
     
    }
    return user
   }
   function profileClicked(){
      let user = getcurrentUser()
      let userId = user.id
      window.location = `myprofile.html?userid=${userId}`
   }

   function userClicked(userId){
  
   window.location = `myprofile.html?userid=${userId}`
} 
  // mode
  function mood(){
      const btn = document.getElementById("themeToggle");
    const body = document.body;

    btn.addEventListener("click", () => {
      body.classList.toggle("dark");
      btn.textContent = body.classList.contains("dark") ? "🌙" : "☀";
    });
  }
     function postClick(postId){
    
    window.location = `postsDetails.html?postId=${postId}`
   }
