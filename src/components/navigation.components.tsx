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
    routeProps: { 
        path: string,
        exact?: boolean,
        component: any
    }
}

type IconNavigationItem = {
    icon: any,
    path: string,
    key: string,
}

const navigationItems: TextNavigationItem[] = [
    {
        title: 'home',
        routeProps: {
            path: '/',
            component: Home,
            exact: true,
        }
    },
    {
        title: 'music',
        routeProps: {
            path: '/music',
            component: Music,
        }
    },
    {
        title: 'tour dates',
        routeProps: {
            path: '/tour-dates',
            component: Tour,
        }
    },
    {
        title: 'media',
        routeProps: {
            path: '/media',
            component: Media,
        }
    },
    {
        title: 'contacts',
        routeProps: {
            path: '/contacts',
            component: Contacts,
        }
    },
    {
        title: 'shop',
        routeProps: {
            path: '/shop',
            component: Shop,
        }
    }
];

const mappingUrl: string = '/lnk.to';
const socialItems: IconNavigationItem[] = [
    {
        icon: socialMediaIcons.facebook,
        path: `${mappingUrl}/fb`,
        key: 'fb',
    },
    {
        icon: socialMediaIcons.twitter,
        path: `${mappingUrl}/twitter`,
        key: 'twitter',
    },
    {
        icon: socialMediaIcons.youtube,
        path: `${mappingUrl}/yt`,
        key: 'yt',
    },
    {
        icon: socialMediaIcons.instagram,
        path: `${mappingUrl}/ig`,
        key: 'ig',
    },
];

const SectionNavBar =
    <NavBar style={{ width: '20rem', paddingTop: '5rem' }}>
        {navigationItems.map(item => <Link key={item.title} to={item.routeProps.path}><li>{item.title}</li></Link>)}
    </NavBar>
;

const Routes =
    <Switch>
        {navigationItems.map(item => <Route key={item.title} {...item.routeProps}></Route>)}
    </Switch>
;

export const webshopRouter =
    <Router>{SectionNavBar}{Routes}</Router>
;

export const socialNavBar =
    <NavBar style={{alignItems: 'flex-end', marginLeft: 'auto'}}>
        {socialItems.map(item => <li key={item.key}><a href={item.path}>{item.icon()}</a></li>)}
    </NavBar>
;

