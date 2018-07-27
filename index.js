import { AppRegistry } from "react-360";
import CurrentPost from "./CurrentPost";
import ModelView from "./ModelView";
import * as Store from "./Store";
import TopPosts from "./TopPosts";
Store.initialize("AIzaSyAaBt1uP7I5CntiAVfIwju6PRrt5HtUrsY");

AppRegistry.registerComponent("TopPosts", () => TopPosts);
AppRegistry.registerComponent("CurrentPost", () => CurrentPost);
// AppRegistry.registerComponent("spiderMan", () => SpiderMan);
AppRegistry.registerComponent("ModelView", () => ModelView);
