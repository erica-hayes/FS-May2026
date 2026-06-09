import { Routes } from '@angular/router'; 

import { SignUp } from './sign-up/sign-up'; 

import { SignIn } from './sign-in/sign-in'; 

import { NotFound } from './not-found/not-found'; 

import { Student } from './student/student'; 

 

export const routes: Routes = [ 

 

    { 

        path: 'sign-up', 

        component: SignUp 

    }, 

    { 

        path: 'sign-in', 

        component: SignIn 

    }, 

    { 

        path: 'student', 

        component: Student 

    }, 

    { 

        path: '', 

        redirectTo: 'sign-up', 

        pathMatch: 'full' 

    }, 

    { 

        path: '**', 

        component: NotFound 

    }, 

 

 

];