
import { colRef, addDoc, db,doc,deleteDoc,serverTimestamp,where,getDocs,query} from './index.js';

const addAppForm = document.getElementById('form1');


addAppForm.addEventListener('submit',(e)=>{
     e.preventDefault();

     addDoc(colRef,{
        Name : addAppForm.nameVal.value.toLowerCase(),
        Description : addAppForm.descVal.value,
        createdAt: serverTimestamp(),
        imageUrl : addAppForm.appLogoUrl.value,
        installUrl : addAppForm.appInstallUrl.value
     }).then(()=>{
        
        alert ("App info added successfully");
        addAppForm.reset();
     });
});

const delAppForm = document.getElementById('form2');

delAppForm.addEventListener('submit',async (e)=>{
     e.preventDefault();
     const q = query(colRef, where("Name", "==", delAppForm.deleteVal.value.toLowerCase()));
   const docToDel = await getDocs(q);
      
   docToDel.forEach((docP)=>{
      const docRef = doc(db, "Apps", docP.id);
      deleteDoc(docRef).then(()=>{
         delAppForm.reset();
       alert("App info deleted successfully");
    });
   
   });
     
});

