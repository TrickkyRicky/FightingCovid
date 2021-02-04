import React from "react";
import Classes from "./InfoScroller.Module.css";

const infoScroller = (props) => {
	return (
		<div className={Classes.Ticker_wrap}>
			<div className={Classes.Ticker}>
				<div className={Classes.Ticker_item}>
					Station 1 was last used November 23rd at 3:25PM
				</div>
				<div className={Classes.Ticker_item}>
					Station 2 was last used November 25th at 7:25PM
				</div>
				<div className={Classes.Ticker_item}>
					Station 3 was last used November 27th at 8:55PM
				</div>
			</div>
		</div>
	);
};

export default infoScroller;
