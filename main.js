
// Javascript file for index.html 

import { colRef, addDoc,db,doc,deleteDoc,serverTimestamp,orderBy,onSnapshot,query} from './index.js';

const q = query(colRef,orderBy('createdAt'));

const App_list = document.querySelector('.App-list');
onSnapshot(q,(snapshot)=>{
  
    let apps = [];
    snapshot.docs.forEach((doc)=>{
      

        const card = document.createElement('li');
        const image = document.createElement('img');
        const appName = document.createElement('span');
        const desc = document.createElement('span');
        const button = document.createElement('button');

        const textDiv = document.createElement('div');

        textDiv.className = "textDiv";
        card.append(image);
        card.append(textDiv);
        textDiv.append(appName);
        textDiv.append(desc);
       
        
        App_list.append(card);

        appName.className = "app-title";
        desc.className = "description";

        image.src = doc.data().imageUrl;
        appName.textContent = doc.data().Name;
        desc.textContent = doc.data().Description;
        
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'buttonDiv';
        
        card.append(buttonDiv);
        buttonDiv.append(button);
        button.textContent = 'Install';
        button.className = 'installButton';
        

        const modal = document.querySelector(".modal");
        const modalBox = document.querySelector(".box");
        const nextButtonDiv = document.querySelector(".nextButtonDiv");
        const modalDesc = document.querySelector(".modalDesc");
        
        
        button.onclick = function(){
            modal.classList.add("is-active");
            const nextButton = document.createElement("a");
            nextButton.textContent = "Next";
            
            nextButton.href = doc.data().installUrl;
            modalDesc.textContent = doc.data().Description;
            nextButtonDiv.append(nextButton);
            
            modalBox.append(modalDesc);
            modalBox.append(nextButtonDiv);
        }
        const closeModalButton = document.querySelector('.modal-close');
        closeModalButton.onclick = function(){
            modal.classList.remove("is-active");
            modalDesc.innerHTML="";
            nextButtonDiv.innerHTML = "";
        }
    });
    
});