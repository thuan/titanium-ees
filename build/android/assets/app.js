Titanium.UI.setBackgroundColor("#000");var tabGroup=Titanium.UI.createTabGroup(),win1=Titanium.UI.createWindow({title:"Tab 1",backgroundColor:"#fff"}),tab1=Titanium.UI.createTab({icon:"KS_nav_views.png",title:"Tab 1",window:win1}),mapview=Ti.Map.createView({top:100,height:200,maptype:Ti.Map.STANDARD_TYPE,region:{latitude:37.77493,longitude:-122.419415,latitudeDelta:.5,longitudeDelta:.5},animate:!0,regionFit:!0,userLocation:!0});win1.add(mapview);var win2=Titanium.UI.createWindow({title:"Tab 2",backgroundColor:"#fff"}),tab2=Titanium.UI.createTab({icon:"KS_nav_ui.png",title:"Tab 2",window:win2}),label2=Titanium.UI.createLabel({color:"#999",text:"I am Window 2",font:{fontSize:20,fontFamily:"Helvetica Neue"},textAlign:"center",width:"auto"});win2.add(label2),tabGroup.addTab(tab1),tabGroup.addTab(tab2),tabGroup.open();