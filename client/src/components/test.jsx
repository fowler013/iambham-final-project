import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
<header className="header new-nav">
                <div className="branch-journeys-top"></div>
                <section className="magazine-bar">
    <ul className="magazine-bar__social">
        <li>Follow us on:</li>
        <li><a href="http://pinterest.com/allrecipes/" target="_blank" className="pinterest" aria-label="Pinterest" title="Pinterest"><span className="svg-icon--social--pinterest svg-icon--social--pinterest-dims"></span></a></li>
        <li><a href="https://www.facebook.com/allrecipes" target="_blank" className="facebook" aria-label="Facebook" title="Facebook"><span className="svg-icon--social--facebook svg-icon--social--facebook-dims"></span></a></li>
        <li><a href="http://instagram.com/allrecipes" target="_blank" className="instagram" aria-label="Instagram" title="Instagram"><span className="svg-icon--social--instagram svg-icon--social--instagram-dims"></span></a></li>
        <li><a href="https://twitter.com/Allrecipes" target="_blank" className="twitter" aria-label="Twitter" title="Twitter"><span className="svg-icon--social--twitter svg-icon--social--twitter-dims"></span></a></li>
    </ul>


    <a className="magazine-bar__link" href="http://armagazine.com/upper-nav" target="_blank">Get the Allrecipes magazine</a>
    
    
</section>
                



<section controller="ar_controllers_top_nav" init="init()" className="ng-scope">
    <ul className="ar-nav-section">
        <li className="ar-logo-tab">
            <a href="https://www.allrecipes.com" aria-label="Allrecipes home page" target="_self">
                <div className="ar-logo" click="setAnalyticsCookie('ARlogo')">
<img alt="Allrecipes" height="36" src="https://secureimages.allrecipes.com/ar-images/ARlogo.svg" width="96"/>                </div>
            </a>
        </li>

        <li className="browse-recipes">
            <a href="" id="navmenu_recipes" className="recipes-txt {active:topBrowseRecipePanel_showing}" popup-trigger="topBrowseRecipePanel"><span>BROWSE</span><span className="icon--chevron-down"></span></a>
        </li>
        <li className="search-tab ng-scope" ng-controller="ar_controllers_search">
            <div className="nav-search">
                <input id="searchText" name="searchText" type="text" placeholder="Find a recipe" ng-model="search.keywords" ng-keypress="isEnterKey($event) &amp;&amp; performSearch()" className="ng-pristine ng-untouched ng-valid ng-empty fsrVisible"/>
                <button className="btn-basic--small search-button" ng-click="performSearch()" aria-label="Search">
                    <span className="svg-icon--top-nav-bar--search-magnify svg-icon--top-nav-bar--search-magnify-dims"></span>
                </button>
                <div popup-trigger="topNavSearchMenu" id="ingredientSearch" className="ingredient-searchtxt" ar-event-focus="click" ar-event-focus-id="setFocus-keywordSearch">Ingredient Search</div>
            </div>
        </li>

        <li className="social-notification" popup-trigger="notifications" ng-className="{active: notifications_showing}" id="e5a238c1-207f-4aaa-9045-3e5c96693fb8">
            <a href="" className="socialNotification ng-scope" ng-controller="ar_controllers_notifications" ng-click="setNotificationsViewed()" title="Notifications">
                <span className="svg-icon--top-nav-bar--nav-bell svg-icon--top-nav-bar--nav-bell-dims" aria-label="notifications"></span>
                <span className="notification-count ng-binding" ng-show="displayCount" ng-bind="notificationCount">1</span>
            </a>
        </li>

        <li className="nav-favorites" ng-click="setAnalyticsCookie('favorites')">
            <a href="https://www.allrecipes.com/cook/my/favorites/" aria-label="My Favorites" title="My Favorites" target="_self">
                <span className="svg-icon--top-nav-bar--grey-heart svg-icon--top-nav-bar--grey-heart-dims"></span>
            </a>
        </li>

            <li className="nav-profile anonymous-user">
                <a href="https://www.allrecipes.com/account/authenticationwelcome/" target="_self">
                    <div className="login-state">
                        <div className="img-profile svg-icon--top-nav-bar--userhead svg-icon--top-nav-bar--userhead-dims fsrHidden" ng-click="setAnalyticsCookie('profile|profile')"></div>
                        
                    </div>
                </a>
            </li>
        <li ng-className="{active:topNavSearchMenu_showing}" className="small-screen search-phone--landscape">
            <a href="" popup-trigger="topNavSearchMenu" ar-event-focus="click" ar-event-focus-id="setFocus-keywordSearch" id="0137e877-335a-4118-b019-e32d2a8855aa">
                <div className="nav-search">
                    <span className="svg-icon--top-nav-bar--search-magnify-gray svg-icon--top-nav-bar--search-magnify-gray-dims"></span>
                </div>
            </a>
        </li>

        <li className="small-screen profile-phone--landscape" ng-className="{active:topNavProfileMenu_showing}" popup-trigger="topNavProfileMenu" id="24d1caf4-2084-4ac9-aafc-4ee5cc506d3f">
            <a href="" aria-label="Open Profile">
                <div className="login-state">
                    <div className="img-profile svg-icon--top-nav-bar--userhead svg-icon--top-nav-bar--userhead-dims fsrHidden"></div>
                </div>
            </a>

        </li>
        <li className="hamburger-tab" ng-className="{active: topNavHamburgerMenu_showing}" popup-trigger="topNavHamburgerMenu" id="be8ade66-fec2-4fdf-812f-7292e98ad7c5">
            <a href="" aria-label="secondary" role="navigation" title="More menu">
                <div className="hamburger-nav">
                    <span className="browse-recipes-iconbar"></span>
                    <span className="browse-recipes-iconbar"></span>
                    <span className="browse-recipes-iconbar"></span>
                </div>
            </a>
        </li>
    </ul>

    <social-notification popup-panel="notifications" className="" id="6ca7dc48-feba-452e-9ad1-89cf7eea3782"><div ng-controller="ar_controllers_notifications" className="nav-tab notification-menu unauthenticated-message ng-hide ng-scope" popup-panel="notifications" id="e5638123-729e-42fb-ace3-39cb6d280115"> <ul className="nav-tab__options"> <li className="unauthenticated"> <h2>Cook in good company</h2> <ul> <li>Connect with like-minded cooks</li> <li>Celebrate your cooking triumphs</li> <li>Discover new favorite recipes</li> </ul> <a href="https://www.allrecipes.com/account/authenticationwelcome/" className="btn-gold" ng-click="setAnalyticsCookie('notification|sign up')" target="_self">Sign up (free)</a> </li> </ul> </div></social-notification>

    <div className="nav-tab nav-tab__search ng-hide" popup-panel="topNavSearchMenu" id="9f42a245-458a-4951-b23e-04736d07b5c2">
        



<form className="ng-pristine ng-valid">
    <div data-ng-controller="ar_controllers_search" className="ng-scope">
        <span className="icon--close" title="Close Ingredient Search" hidewhenclicked=""></span>
        <div className="input-wrap--home">
            <span className="svg-icon--top-nav-bar--search-magnify-gray svg-icon--top-nav-bar--search-magnify-gray-dims"></span>
            <input id="searchText" type="text" placeholder="Keywords" ng-model="search.keywords" className="setFocus-keywordSearch ng-pristine ng-untouched ng-valid ng-empty fsrVisible"/>
        </div>

        

        <div className="input-wrap--home ingredients" ar-assign-scrollable-classes="{ outermostWrapper: 'ingredients', clippingFrame: 'ingredient-clipping-frame', draggableElement: 'ingredient-scroller' }">    

            <div className="ingredient-clipping-frame">
                <ul className="ingredient-scroller ng-scope" ng-mousedown="mouseDown($event)" ng-mouseup="mouseUp($event)" ar-touchstart="touchStart($event)" ar-touchend="touchEnd($event)" unselectable="on" onselectstart="return false;">


                </ul>
                </div>

            <div className="ingredient-add-exclude">
                
                <input id="includeIngText" type="text" ng-attr-placeholder="{{includeIngPlaceholderText}}" name="txtIncludeIng" ng-model="includeIngredient" ng-focus="hideAds();" ng-blur="showAds()" ng-keydown="(isBackspaceKey($event) &amp;&amp; removeLastIngredientInclude($event)) || (isTabKey($event) &amp;&amp; addIngredientInclude($event))" className="setFocus-includeIng ng-pristine ng-untouched ng-valid ng-empty fsrVisible" placeholder="Include ingredients"/>
            </div>
            <a className="btn-basic--small include" ng-click="addIngredientInclude($event)" ar-event-focus="click" ar-event-focus-id="setFocus-includeIng" ng-className="{ 'grayed-out': includeIngHitMax }"><span>+</span></a>

        </div> 

        

        <div className="input-wrap--home ingredients" ar-assign-scrollable-classes="{ outermostWrapper: 'ingredients', clippingFrame: 'ingredient-clipping-frame', draggableElement: 'ingredient-scroller' }">    

            <div className="ingredient-clipping-frame">
                <ul className="ingredient-scroller ng-scope" ng-mousedown="mouseDown($event)" ng-mouseup="mouseUp($event)" ar-touchstart="touchStart($event)" ar-touchend="touchEnd($event)" unselectable="on" onselectstart="return false;">


                </ul>
                </div>

            <div className="ingredient-add-exclude">    
                <input id="excludeIngText" type="text" ng-attr-placeholder="{{excludeIngPlaceholderText}}" name="txtExcludeIng" ng-model="excludeIngredient" ng-focus="hideAds();" ng-blur="showAds()" ng-keydown="(isBackspaceKey($event) &amp;&amp; removeLastIngredientExclude($event)) || (isTabKey($event) &amp;&amp; addIngredientExclude($event))" className="setFocus-excludeIng ng-pristine ng-untouched ng-valid ng-empty fsrVisible" placeholder="Exclude ingredients"/>
            </div>
            <a className="btn-basic--small exclude" ng-click="addIngredientExclude($event)" ar-event-focus="click" ar-event-focus-id="setFocus-excludeIng" ng-className="{ 'grayed-out': excludeIngHitMax }"><span>—</span></a>

        </div> 

        <div className="nav-tab__buttons">
            <button className="btn-basic--small btn-search" ng-click="performSearch()">Go</button>
        </div>
    </div>
    <div id="msg-toolbar" className="notification hidden"><span className="notification__message"></span></div>
</form>


    </div>
    <div popup-panel="topBrowseRecipePanel" className="browse-recipe-tab social ng-hide" id="topBrowseRecipePanel">


<section className="hero-link  nav-tab__options recipe-nav-tab__options">
    <div className="grid underline_hero_link">
      
        <ul className="browse-hubs">
                <li className="browse-hubs__categories">
                    <h3>
                        Meal Type
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/76/appetizers-and-snacks/" ng-click="setAnalyticsCookie('browse|appetizers \u0026 snacks')" title="Appetizers &amp; Snacks Recipes" target="_self">
                                    Appetizers &amp; Snacks
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/78/breakfast-and-brunch/" ng-click="setAnalyticsCookie('browse|breakfast \u0026 brunch')" title="Breakfast &amp; Brunch Recipes" target="_self">
                                    Breakfast &amp; Brunch
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/79/desserts/" ng-click="setAnalyticsCookie('browse|desserts')" title="Desserts Recipes" target="_self">
                                    Desserts
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/17562/dinner/" ng-click="setAnalyticsCookie('browse|dinner')" title="Dinner Recipes" target="_self">
                                    Dinner
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/77/drinks/" ng-click="setAnalyticsCookie('browse|drinks')" title="Drinks Recipes" target="_self">
                                    Drinks
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        Ingredient
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/200/meat-and-poultry/beef/" ng-click="setAnalyticsCookie('browse|beef')" title="Beef Recipes" target="_self">
                                    Beef
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/201/meat-and-poultry/chicken/" ng-click="setAnalyticsCookie('browse|chicken')" title="Chicken Recipes" target="_self">
                                    Chicken
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/95/pasta-and-noodles/" ng-click="setAnalyticsCookie('browse|pasta')" title="Pasta Recipes" target="_self">
                                    Pasta
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/205/meat-and-poultry/pork/" ng-click="setAnalyticsCookie('browse|pork')" title="Pork Recipes" target="_self">
                                    Pork
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/416/seafood/fish/salmon/" ng-click="setAnalyticsCookie('browse|salmon')" title="Salmon Recipes" target="_self">
                                    Salmon
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        Diet &amp; Health
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/739/healthy-recipes/diabetic/" ng-click="setAnalyticsCookie('browse|diabetic')" title="Diabetic Recipes" target="_self">
                                    Diabetic
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/741/healthy-recipes/gluten-free/" ng-click="setAnalyticsCookie('browse|gluten free')" title="Gluten Free Recipes" target="_self">
                                    Gluten Free
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/84/healthy-recipes/" ng-click="setAnalyticsCookie('browse|healthy')" title="Healthy Recipes" target="_self">
                                    Healthy
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/1232/healthy-recipes/low-calorie/" ng-click="setAnalyticsCookie('browse|low calorie')" title="Low Calorie Recipes" target="_self">
                                    Low Calorie
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/1231/healthy-recipes/low-fat/" ng-click="setAnalyticsCookie('browse|low fat')" title="Low Fat Recipes" target="_self">
                                    Low Fat
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        Seasonal
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/630/everyday-cooking/seasonal/summer/" ng-click="setAnalyticsCookie('browse|summer recipes')" title="Summer Recipes" target="_self">
                                    Summer Recipes
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/1640/holidays-and-events/labor-day/" ng-click="setAnalyticsCookie('browse|labor day')" title="Labor Day Recipes" target="_self">
                                    Labor Day
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/11985/everyday-cooking/family-friendly/back-to-school/" ng-click="setAnalyticsCookie('browse|back to school')" title="Back to School Recipes" target="_self">
                                    Back to School
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/196/holidays-and-events/rosh-hashanah/" ng-click="setAnalyticsCookie('browse|rosh hashanah')" title="Rosh Hashanah Recipes" target="_self">
                                    Rosh Hashanah
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/85/holidays-and-events/" ng-click="setAnalyticsCookie('browse|more holidays \u0026 events')" title="More Holidays &amp; Events Recipes" target="_self">
                                    More Holidays &amp; Events
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        Dish Type
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/156/bread/" ng-click="setAnalyticsCookie('browse|breads')" title="Breads Recipes" target="_self">
                                    Breads
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/276/desserts/cakes/" ng-click="setAnalyticsCookie('browse|cakes')" title="Cakes Recipes" target="_self">
                                    Cakes
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/96/salad/" ng-click="setAnalyticsCookie('browse|salads')" title="Salads Recipes" target="_self">
                                    Salads
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/138/drinks/smoothies/" ng-click="setAnalyticsCookie('browse|smoothies')" title="Smoothies Recipes" target="_self">
                                    Smoothies
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/94/soups-stews-and-chili/" ng-click="setAnalyticsCookie('browse|soups, stews \u0026 chili')" title="Soups, Stews &amp; Chili Recipes" target="_self">
                                    Soups, Stews &amp; Chili
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        Cooking Style
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/88/bbq-grilling/" ng-click="setAnalyticsCookie('browse|bbq \u0026 grilling')" title="BBQ &amp; Grilling Recipes" target="_self">
                                    BBQ &amp; Grilling
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/1947/everyday-cooking/quick-and-easy/" ng-click="setAnalyticsCookie('browse|quick \u0026 easy')" title="Quick &amp; Easy Recipes" target="_self">
                                    Quick &amp; Easy
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/253/everyday-cooking/slow-cooker/" ng-click="setAnalyticsCookie('browse|slow cooker')" title="Slow Cooker Recipes" target="_self">
                                    Slow Cooker
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/1227/everyday-cooking/vegan/" ng-click="setAnalyticsCookie('browse|vegan')" title="Vegan Recipes" target="_self">
                                    Vegan
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/87/everyday-cooking/vegetarian/" ng-click="setAnalyticsCookie('browse|vegetarian')" title="Vegetarian Recipes" target="_self">
                                    Vegetarian
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        World Cuisine
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/227/world-cuisine/asian/" ng-click="setAnalyticsCookie('browse|asian')" title="Asian Recipes" target="_self">
                                    Asian
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/233/world-cuisine/asian/indian/" ng-click="setAnalyticsCookie('browse|indian')" title="Indian Recipes" target="_self">
                                    Indian
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/723/world-cuisine/european/italian/" ng-click="setAnalyticsCookie('browse|italian')" title="Italian Recipes" target="_self">
                                    Italian
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/728/world-cuisine/latin-american/mexican/" ng-click="setAnalyticsCookie('browse|mexican')" title="Mexican Recipes" target="_self">
                                    Mexican
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/15876/us-recipes/southern/" ng-click="setAnalyticsCookie('browse|southern')" title="Southern Recipes" target="_self">
                                    Southern
                                </a>
                            </li>
                    </ul>
                </li>
                <li className="browse-hubs__categories">
                    <h3>
                        Special Collections
                    </h3><span className="icon--chevron-right"></span>

                    <ul className="browse-hubs__subcategories">
<li>
                                <a href="https://www.allrecipes.com/recipes/17235/everyday-cooking/allrecipes-magazine-recipes/" ng-click="setAnalyticsCookie('browse|allrecipes magazine recipes')" title="Allrecipes Magazine Recipes" target="_self">
                                    Allrecipes Magazine Recipes
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/16791/everyday-cooking/special-collections/web-show-recipes/food-wishes/" ng-click="setAnalyticsCookie('browse|food wishes with chef john')" title="Food Wishes with Chef John Recipes" target="_self">
                                    Food Wishes with Chef John
                                </a>
                            </li>
<li>
                                <a href="https://www.allrecipes.com/recipes/22908/everyday-cooking/special-collections/new/" ng-click="setAnalyticsCookie('browse|newest recipes')" title="Newest Recipes" target="_self">
                                    Newest Recipes
                                </a>
                            </li>
<li>
                                <a href="http://dish.allrecipes.com/trusted-brand-pages/" ng-click="setAnalyticsCookie('browse|trusted brands')" title="Trusted Brands Recipes" target="_self">
                                    Trusted Brands
                                </a>
                            </li>
                    </ul>
                </li>
        </ul>
    </div>
    <a className="recipe-hero-link__item__text" href="https://www.allrecipes.com/recipes/" ng-click="setAnalyticsCookie('browse|all categories')" target="_self">All Categories</a>
</section>


    </div>
    <div className="nav-tab social profile-nav ng-hide" popup-panel="topNavProfileMenu" id="abbfa68b-367b-4b83-9393-878f6ad0bd45">
        <ul className="nav-tab__options">

            <li ng-click="setAnalyticsCookie('profile|feed', 'menu')">
                <a href="https://www.allrecipes.com/account/authenticationwelcome/?loginReferrerUrl=/home" id="navmenu_myFeed" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--home svg-icon--top-nav-bar--home-dims"></span>
                    <span className="itemText">Feed</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|profile', 'menu')">
                <a href="https://www.allrecipes.com/cook/my/" id="navmenu_myprofile" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-profile svg-icon--top-nav-bar--nav-profile-dims"></span>
                    <span className="itemText">Profile</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|favorites', 'menu')">
                <a href="https://www.allrecipes.com/cook/my/favorites/" rel="nofollow" id="navmenu_recipebox" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--grey-heart svg-icon--top-nav-bar--grey-heart-dims"></span>
                    <span className="itemText">Favorites</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|friends', 'menu')">
                <a href="https://www.allrecipes.com/cook/my/findfriends/" rel="nofollow" id="navmenu_findfriends" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-friends svg-icon--top-nav-bar--nav-friends-dims"></span>
                    <span className="itemText">Friends</span>
                </a>
            </li>

            <li ng-click="setAnalyticsCookie('profile|shopping list', 'menu')">
                <a href="https://www.allrecipes.com/my/shopping-lists/" rel="nofollow" id="navmenu_shoppinglist" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--grey-shopping svg-icon--top-nav-bar--grey-shopping-dims"></span>
                    <span className="itemText">Shopping List</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('profile|settings', 'menu')">
                <a href="https://www.allrecipes.com/cook/my/account-settings/" rel="nofollow" id="navmenu_settings" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-settings svg-icon--top-nav-bar--nav-settings-dims"></span>
                    <span className="itemText">Settings</span>
                </a>
            </li>

        </ul>

            <div className="signin" ng-click="setAnalyticsCookie('profile|sign in ', 'menu')">
                <button onclick="location.href='https://www.allrecipes.com/account/authenticationwelcome/?actionsource=' +(typeof dataLayer !=='undefined' ? dataLayer.page.category.contentType : '' ) " className="btn-basic--large btn-gold" id="navmenu_signin_signup">Sign In <em>or</em> Sign Up</button>
            </div>

    </div>

    <div className="nav-tab last ng-hide" popup-panel="topNavHamburgerMenu" id="1ccb8717-8738-4cd0-968e-301e81a24321">

        <ul className="nav-tab__options">
            <li className="underline_link">
                <a href="" id="navmenu_recipes" popup-trigger="browseRecipePanel" ng-click="browseNav()">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-browse-orange svg-icon--top-nav-bar--nav-browse-orange-dims" ng-className="{'active': isActive}"></span>
                    <span className="nav-icon svg-icon--top-nav-bar--nav-browse svg-icon--top-nav-bar--nav-browse-dims" ng-className="{'hidden': isActive}"></span>
                    <span className="nav-link-text">Browse Recipes</span>
                    <span className="icon-chevron" ng-className="{'active': isActive}"></span>
                </a>
            </li>





            <li id="mobile-nav-container" className="browse-div-option ng-hide" popup-panel="browseRecipePanel">



<ul className="nav-tab__mobile-browse">

        <li>
            <input type="checkbox" id="Meal Type"/><label for="Meal Type">Meal Type<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/76/appetizers-and-snacks/" ng-click="setAnalyticsCookie('browse|appetizers \u0026 snacks')" title="Appetizers &amp; Snacks Recipes" target="_self">Appetizers &amp; Snacks</a></li>
<li><a href="https://www.allrecipes.com/recipes/78/breakfast-and-brunch/" ng-click="setAnalyticsCookie('browse|breakfast \u0026 brunch')" title="Breakfast &amp; Brunch Recipes" target="_self">Breakfast &amp; Brunch</a></li>
<li><a href="https://www.allrecipes.com/recipes/79/desserts/" ng-click="setAnalyticsCookie('browse|desserts')" title="Desserts Recipes" target="_self">Desserts</a></li>
<li><a href="https://www.allrecipes.com/recipes/17562/dinner/" ng-click="setAnalyticsCookie('browse|dinner')" title="Dinner Recipes" target="_self">Dinner</a></li>
<li><a href="https://www.allrecipes.com/recipes/77/drinks/" ng-click="setAnalyticsCookie('browse|drinks')" title="Drinks Recipes" target="_self">Drinks</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Ingredient"/><label for="Ingredient">Ingredient<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/200/meat-and-poultry/beef/" ng-click="setAnalyticsCookie('browse|beef')" title="Beef Recipes" target="_self">Beef</a></li>
<li><a href="https://www.allrecipes.com/recipes/201/meat-and-poultry/chicken/" ng-click="setAnalyticsCookie('browse|chicken')" title="Chicken Recipes" target="_self">Chicken</a></li>
<li><a href="https://www.allrecipes.com/recipes/95/pasta-and-noodles/" ng-click="setAnalyticsCookie('browse|pasta')" title="Pasta Recipes" target="_self">Pasta</a></li>
<li><a href="https://www.allrecipes.com/recipes/205/meat-and-poultry/pork/" ng-click="setAnalyticsCookie('browse|pork')" title="Pork Recipes" target="_self">Pork</a></li>
<li><a href="https://www.allrecipes.com/recipes/416/seafood/fish/salmon/" ng-click="setAnalyticsCookie('browse|salmon')" title="Salmon Recipes" target="_self">Salmon</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Diet &amp; Health"/><label for="Diet &amp; Health">Diet &amp; Health<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/739/healthy-recipes/diabetic/" ng-click="setAnalyticsCookie('browse|diabetic')" title="Diabetic Recipes" target="_self">Diabetic</a></li>
<li><a href="https://www.allrecipes.com/recipes/741/healthy-recipes/gluten-free/" ng-click="setAnalyticsCookie('browse|gluten free')" title="Gluten Free Recipes" target="_self">Gluten Free</a></li>
<li><a href="https://www.allrecipes.com/recipes/84/healthy-recipes/" ng-click="setAnalyticsCookie('browse|healthy')" title="Healthy Recipes" target="_self">Healthy</a></li>
<li><a href="https://www.allrecipes.com/recipes/1232/healthy-recipes/low-calorie/" ng-click="setAnalyticsCookie('browse|low calorie')" title="Low Calorie Recipes" target="_self">Low Calorie</a></li>
<li><a href="https://www.allrecipes.com/recipes/1231/healthy-recipes/low-fat/" ng-click="setAnalyticsCookie('browse|low fat')" title="Low Fat Recipes" target="_self">Low Fat</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Seasonal"/><label for="Seasonal">Seasonal<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/630/everyday-cooking/seasonal/summer/" ng-click="setAnalyticsCookie('browse|summer recipes')" title="Summer Recipes" target="_self">Summer Recipes</a></li>
<li><a href="https://www.allrecipes.com/recipes/1640/holidays-and-events/labor-day/" ng-click="setAnalyticsCookie('browse|labor day')" title="Labor Day Recipes" target="_self">Labor Day</a></li>
<li><a href="https://www.allrecipes.com/recipes/11985/everyday-cooking/family-friendly/back-to-school/" ng-click="setAnalyticsCookie('browse|back to school')" title="Back to School Recipes" target="_self">Back to School</a></li>
<li><a href="https://www.allrecipes.com/recipes/196/holidays-and-events/rosh-hashanah/" ng-click="setAnalyticsCookie('browse|rosh hashanah')" title="Rosh Hashanah Recipes" target="_self">Rosh Hashanah</a></li>
<li><a href="https://www.allrecipes.com/recipes/85/holidays-and-events/" ng-click="setAnalyticsCookie('browse|more holidays \u0026 events')" title="More Holidays &amp; Events Recipes" target="_self">More Holidays &amp; Events</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Dish Type"/><label for="Dish Type">Dish Type<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/156/bread/" ng-click="setAnalyticsCookie('browse|breads')" title="Breads Recipes" target="_self">Breads</a></li>
<li><a href="https://www.allrecipes.com/recipes/276/desserts/cakes/" ng-click="setAnalyticsCookie('browse|cakes')" title="Cakes Recipes" target="_self">Cakes</a></li>
<li><a href="https://www.allrecipes.com/recipes/96/salad/" ng-click="setAnalyticsCookie('browse|salads')" title="Salads Recipes" target="_self">Salads</a></li>
<li><a href="https://www.allrecipes.com/recipes/138/drinks/smoothies/" ng-click="setAnalyticsCookie('browse|smoothies')" title="Smoothies Recipes" target="_self">Smoothies</a></li>
<li><a href="https://www.allrecipes.com/recipes/94/soups-stews-and-chili/" ng-click="setAnalyticsCookie('browse|soups, stews \u0026 chili')" title="Soups, Stews &amp; Chili Recipes" target="_self">Soups, Stews &amp; Chili</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Cooking Style"/><label for="Cooking Style">Cooking Style<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/88/bbq-grilling/" ng-click="setAnalyticsCookie('browse|bbq \u0026 grilling')" title="BBQ &amp; Grilling Recipes" target="_self">BBQ &amp; Grilling</a></li>
<li><a href="https://www.allrecipes.com/recipes/1947/everyday-cooking/quick-and-easy/" ng-click="setAnalyticsCookie('browse|quick \u0026 easy')" title="Quick &amp; Easy Recipes" target="_self">Quick &amp; Easy</a></li>
<li><a href="https://www.allrecipes.com/recipes/253/everyday-cooking/slow-cooker/" ng-click="setAnalyticsCookie('browse|slow cooker')" title="Slow Cooker Recipes" target="_self">Slow Cooker</a></li>
<li><a href="https://www.allrecipes.com/recipes/1227/everyday-cooking/vegan/" ng-click="setAnalyticsCookie('browse|vegan')" title="Vegan Recipes" target="_self">Vegan</a></li>
<li><a href="https://www.allrecipes.com/recipes/87/everyday-cooking/vegetarian/" ng-click="setAnalyticsCookie('browse|vegetarian')" title="Vegetarian Recipes" target="_self">Vegetarian</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="World Cuisine"/><label for="World Cuisine">World Cuisine<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/227/world-cuisine/asian/" ng-click="setAnalyticsCookie('browse|asian')" title="Asian Recipes" target="_self">Asian</a></li>
<li><a href="https://www.allrecipes.com/recipes/233/world-cuisine/asian/indian/" ng-click="setAnalyticsCookie('browse|indian')" title="Indian Recipes" target="_self">Indian</a></li>
<li><a href="https://www.allrecipes.com/recipes/723/world-cuisine/european/italian/" ng-click="setAnalyticsCookie('browse|italian')" title="Italian Recipes" target="_self">Italian</a></li>
<li><a href="https://www.allrecipes.com/recipes/728/world-cuisine/latin-american/mexican/" ng-click="setAnalyticsCookie('browse|mexican')" title="Mexican Recipes" target="_self">Mexican</a></li>
<li><a href="https://www.allrecipes.com/recipes/15876/us-recipes/southern/" ng-click="setAnalyticsCookie('browse|southern')" title="Southern Recipes" target="_self">Southern</a></li>
            </ul>
        </li>
        <li>
            <input type="checkbox" id="Special Collections"/><label for="Special Collections">Special Collections<span className="icon-chevron"></span></label>
            <ul className="mobile-browse-subnav">
<li><a href="https://www.allrecipes.com/recipes/17235/everyday-cooking/allrecipes-magazine-recipes/" ng-click="setAnalyticsCookie('browse|allrecipes magazine recipes')" title="Allrecipes Magazine Recipes" target="_self">Allrecipes Magazine Recipes</a></li>
<li><a href="https://www.allrecipes.com/recipes/16791/everyday-cooking/special-collections/web-show-recipes/food-wishes/" ng-click="setAnalyticsCookie('browse|food wishes with chef john')" title="Food Wishes with Chef John Recipes" target="_self">Food Wishes with Chef John</a></li>
<li><a href="https://www.allrecipes.com/recipes/22908/everyday-cooking/special-collections/new/" ng-click="setAnalyticsCookie('browse|newest recipes')" title="Newest Recipes" target="_self">Newest Recipes</a></li>
<li><a href="http://dish.allrecipes.com/trusted-brand-pages/" ng-click="setAnalyticsCookie('browse|trusted brands')" title="Trusted Brands Recipes" target="_self">Trusted Brands</a></li>
            </ul>
        </li>
</ul>

<div className="see-all"><a href="https://www.allrecipes.com/recipes/" target="_self">See all categories</a></div>


            </li>

            <li ng-click="setAnalyticsData('allrecipes magazine')">
                <a href="https://www.magazine.store/allrecipes-magazine/" id="navmenu_magazine" target="_blank" rel="noopener">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-magazine svg-icon--top-nav-bar--nav-magazine-dims"></span>
                    <span>Allrecipes Magazine</span>
                </a>
            </li>

            <li ng-click="setAnalyticsData('dinner spinner tv')">
                <a href="http://dish.allrecipes.com/dinner-spinner-tv-show/" id="navmenu_tv" rel="noopener" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--tv_icon svg-icon--top-nav-bar--tv_icon-dims"></span>
                    <span>Dinner Spinner TV</span>
                </a>
            </li>

            <li ng-click="setAnalyticsData('shop')">
                <a href="http://shop.allrecipes.com/shop" id="navmenu_shop" target="_blank" rel="noopener">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-shop svg-icon--top-nav-bar--nav-shop-dims"></span>
                    <span>Shop</span>
                </a>
            </li>
            <li className="underline_link" ng-click="setAnalyticsData('cooking school')">
                <a href="http://cookingschool.allrecipes.com/" id="navmenu_cooking_school" target="_blank" rel="noopener">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-cookingschool svg-icon--top-nav-bar--nav-cookingschool-dims"></span>
                    <span>Cooking School</span>
                </a>
            </li>
            <li ng-click="setAnalyticsCookie('newsletters')">
                <a href="https://www.allrecipes.com/cook/my/account-settings/#NewslettersSubscription" id="navmenu_social_gallery" rel="noopener" target="_self">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-newsletters svg-icon--top-nav-bar--nav-newsletters-dims"></span>
                    <span>Newsletters</span>
                </a>
            </li>
            <li ng-click="setAnalyticsData('ask the community')">
                <a href="http://dish.allrecipes.com/ask-the-community/" target="_self" id="navmenu_dish" rel="noopener">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-community svg-icon--top-nav-bar--nav-community-dims"></span>
                    <span>Ask the Community</span>
                </a>
            </li>
            <li className="underline_link" ng-click="setAnalyticsData('help')">
                <a href="http://dish.allrecipes.com/customer-service/" id="navmenu_help" target="_self" rel="noopener">
                    <span className="nav-icon svg-icon--top-nav-bar--nav-help svg-icon--top-nav-bar--nav-help-dims"></span>
                    <span>Help</span>
                </a>
            </li>
            <li>
                <a href="http://dish.allrecipes.com/allrecipes-jobs-2/" target="_self" ng-click="setAnalyticsData('jobs')" rel="noopener">Jobs</a>
                <a href="http://press.allrecipes.com/" ng-click="setAnalyticsData('newsroom')" rel="noopener" target="_self">Newsroom</a>
            </li>

        </ul>
    </div>
</section>

            </header>
            </React.Fragment>
        )
    }
}

export default Navigation;

