import {Page} from 'ionic-angular';
import {WatchListPage} from '../watchlist/watchlist';
import {AddPage} from '../add/add';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  watchListRoot: any = WatchListPage;
  AddPageRoot: any = AddPage;
}
