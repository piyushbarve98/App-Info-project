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

        card.append(image);
        card.append(appName);
        card.append(desc);
        
        App_list.append(card);

        image.src = doc.data().imageUrl;
        appName.textContent = doc.data().Name;
        desc.textContent = doc.data().Description;
    });
    
});