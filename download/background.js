chrome.downloads.onChanged.addListener((d)=>{
    //console.log('state' in d);
    if('state' in d && d.state.current==='complete') {
        console.log("File is downloaded");
        //chrome.tabs.create({},()=>{console.log("tag created");});
        chrome.tabs.query({active:true,currentWindow:true},(tab)=>{
            chrome.tabs.executeScript({code:`alert("hi");`});
        });
    }
});