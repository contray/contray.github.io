var sidebarBtn = document.querySelector('.filter-btn'),
		    sidebar = document.querySelector('.sidebar-responsive');

		sidebarBtn.onclick = function(){
			if(sidebar.className === "sidebar-responsive"){
				sidebar.className += " sidebar-responsive__position";
			}else {
				sidebar.className = "sidebar-responsive";
			}
		}