import { colRef, addDoc,db,doc,deleteDoc,serverTimestamp,orderBy,onSnapshot,query} from './index.js';

const q = query(colRef,orderBy('createdAt'));

const App_list = document.querySelector('.App-list');
onSnapshot(q,(snapshot)=>{
  
    let apps = [];
    snapshot.docs.forEach((doc)=>{
      
        const card = document.createElement('li');
        const appName = document.createElement('span');
        const desc = document.createElement('span');

        card.append(appName);
        card.append(desc);
        
        App_list.append(card);

        appName.textContent = doc.data().Name;
        desc.textContent = doc.data().Description;
    });
    console.log(apps);
});