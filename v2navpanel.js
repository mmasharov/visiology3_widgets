(function(){
	const navPanelStyle = document.createElement('style');
	navPanelStyle.textContent = `
		#va-dashboard-container {
			order: 2
		}
		#va-dashboard-container.va-dashboard-editing {
			order: inherit;
		}
		.va-sheets-navigator-container {
			order: 1;
			background-color: #013358 !important;
			justify-content: center !important;
			height: 36px !important;
		}
		ul.va-sheet-tabs {
			margin: 0 auto;
			list-style-type: none;
			padding: 0 !important;
			white-space: nowrap;
			text-align: center;
			overflow-y: hidden;
			overflow-x: auto;
			scrollbar-width: none;
		}
		li.va-sheet-tab > button {
			display: block;
			color: white !important;
			text-align: center;
			padding: 5px;
			text-decoration: none;
			border: 0;
			border-top: transparent 4px solid;
			border-radius: 0 !important;
			background-color: inherit !important;
			cursor: pointer;
			background: none;
			font-size: 14px;
		}
		li.va-sheet-tab.selected {
			border-bottom: #2884c3 4px solid !important;
			color: white !important;
		}
		.va-sheets-scroll-buttons-container {
			display: none !important;
		}
	`;
	document.head.appendChild(navPanelStyle);
})()