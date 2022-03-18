
import { colRef, addDoc, db,doc,deleteDoc,serverTimestamp} from './index.js';

const addAppForm = document.getElementById('form1');


addAppForm.addEventListener('submit',(e)=>{
     e.preventDefault();

     addDoc(colRef,{
        Name : addAppForm.nameVal.value,
        Description : addAppForm.descVal.value,
        createdAt: serverTimestamp(),
        imageUrl : addAppForm.appLogoUrl.value
     }).then(()=>{
        
        alert ("App info added successfully");
        addAppForm.reset();
     });
});

const delAppForm = document.getElementById('form2');

delAppForm.addEventListener('submit',(e)=>{
     e.preventDefault();

     const docRef = doc(db,'Apps',delAppForm.deleteVal.value);
     console.log("delapp form running");
     deleteDoc(docRef).then(()=>{
        delAppForm.reset();
      alert("App info deleted successfully");
   });
});