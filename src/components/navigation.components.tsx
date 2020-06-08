import * as React from 'react';
import { Contacts } from '../pages/contacts/contacts.component';
import { Home } from '../pages/home/home.component';
import { Music } from '../pages/music/music.component';
import { Tour } from '../pages/tour/tour.component';
import { Media } from '../pages/media/media.component';
import { Shop } from '../pages/shop/shop.component';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { socialMediaIcons } from './generic/icons';
import { NavBar } from './generic/generic';

type TextNavigationItem = {
    title: string,
    link: string,
    exact: boolean,
    component: any
}

type IconNavigationItem = {
    icon: any,
    link: string,
    key: string,
}

const navigationItems: TextNavigationItem[] = [
    {
        title: 'home',
        link: '/',
        component: Home,
        exact: true,
    },
    {
        title: 'music',
        link: '/music',
        component: Music,
        exact: false,
    },
    {
        title: 'tour dates',
        link: '/tour-dates',
        component: Tour,
        exact: false,
    },
    {
        title: 'media',
        link: '/media',
        component: Media,
        exact: false,
    },
    {
        title: 'contacts',
        link: '/contacts',
        component: Contacts,
        exact: false,
    },
    {
        title: 'shop',
        link: '/shop',
        component: Shop,
        exact: false,
    }
];

const mappingUrl: string = '/lnk.to';
const socialItems: IconNavigationItem[] = [
    {
        icon: socialMediaIcons.facebook,
        link: `${mappingUrl}/fb`,
        key: 'fb',
    },
    {
        icon: socialMediaIcons.twitter,
        link: `${mappingUrl}/twitter`,
        key: 'twitter',
    },
    {
        icon: socialMediaIcons.youtube,
        link: `${mappingUrl}/yt`,
        key: 'yt',
    },
    {
        icon: socialMediaIcons.instagram,
        link: `${mappingUrl}/ig`,
        key: 'ig',
    },
];

const SectionNavBar =
    <NavBar style={{ width: '20rem', paddingTop: '5rem' }}>
        {navigationItems.map(item => <Link key={item.title} to={item.link}><li>{item.title}</li></Link>)}
    </NavBar>
;

const Routes =
    <Switch>
        {navigationItems.map(item => <Route key={item.title} path={item.link} exact component={item.component}></Route>)}
    </Switch>
;

export const webshopRouter =
    <Router>{SectionNavBar}{Routes}</Router>
;

export const socialNavBar =
    <NavBar style={{alignItems: 'flex-end', marginLeft: 'auto'}}>
        {socialItems.map(item => <li key={item.key}><a href={item.link}>{item.icon()}</a></li>)}
    </NavBar>
;

