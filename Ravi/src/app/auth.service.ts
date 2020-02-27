import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";
import { Capability } from "protractor";
import { map } from "rxjs/operators";
import { tokenName } from '@angular/compiler';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { getPriority } from 'os';
@Injectable({
    providedIn: "root"
})
export class AuthService {
    api_url
    constructor(public http: HttpClient) {
        console.log("Hello AuthService Provider");
        this.api_url = 'http://aatawala.in/crm/Webs'
    }




    signUp(customer) {
        console.log("alal", customer);
        const user = {
            name: customer.name,
            mobile: customer.contact,
            email: customer.email,
            no_of_members: customer.no_of_members,
            occupation: customer.occupation,
            password: customer.password,
            confirm_password: customer.confirm_password
        };

        return this.http.post(
            this.api_url + '/sign_up',
            user
        );
    }


    OTP_Verification(data) {
        const user = {
            email: data.email,
            otp: data.otp
        };
        return this.http.post(this.api_url + '/verify_otp', user)
    }


    login(user1) {
        const customer = {
            email: user1.email,
            password: user1.password
        };

        return this.http.post(
            this.api_url + '/login',
            customer
        );
    }


    Flour_type() {
        const user = {
            id: localStorage.getItem('id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + '/get_flour_types', user);
    }


    flour_list(category_id) {
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')

        const customer = {
            id: id,
            token: token,
            category_id: category_id
        }
        return this.http.post(this.api_url + '/get_flour_by_category', customer)
    }


    add_cart(quantity, category_id, price, amount) {
        console.log("alal", price);
        const id = localStorage.getItem('id')
        const token = localStorage.getItem('token')

        const customer = {
            id: id,
            token: token,
            product_id: category_id,
            quantity: quantity,
            price: price,
            amount: amount
        }
        return this.http.post(this.api_url + '/add_to_cart', customer)
    }

    current_cart() {
        const user = {
            id: localStorage.getItem('id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + '/get_current_cart', user)
    }


delete_cart(product_id) {
    console.log(product_id);
    
        const user = {
            id: product_id,
            token: localStorage.getItem('token'),
            product_id:product_id
        }
        return this.http.post(this.api_url + '/delete_cart_item', user)
    }

    place_order( addr) {
        const token = localStorage.getItem('token')
        const user_id = localStorage.getItem('id')
        const user = {
            user_id: user_id,
            token: token,
            address: addr
        }
        return this.http.post(this.api_url + '/place_order', user)
    }
    
my_order_list(){
    const token= localStorage.getItem('token')
    const user_id= localStorage.getItem('id')
    const user={
        token:token,
        user_id:user_id
    }
    return this.http.post(this.api_url+'/get_my_order_list',user)
}

order_details_item(order_id){
    const token=localStorage.getItem('token');
    const user_id=localStorage.getItem('id');
    const user={
        token:token,
        user_id:user_id,
        order_id:order_id
    }
    return this.http.post(this.api_url+'/get_order_details',user)
}

order_details_summary(order_id){
    const token=localStorage.getItem('token');
    const user_id=localStorage.getItem('id');
    const user={
        token:token,
        user_id:user_id,
        order_id:order_id
    }
    return this.http.post(this.api_url+'/get_order_details',user)
}











    family_members_list() {
        const user = {
            token: localStorage.getItem("token"),
            owner_id: localStorage.getItem("owner_id")
        };
        return this.http.post(
            this.api_url + '/family_members_list',
            user
        );
    }

    delete_family_list(id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token')

        const user = {
            owner_id: owner_id,
            token: token,
            id: id
        }
        return this.http.post(this.api_url + "/delete_family_members", user)
    }


    username(user_name) {
        const user = {
            username: user_name
        };
        return this.http.post(
            this.api_url + '/check_unique_username',
            user
        );
    }





    ownerprofile() {
        const token = localStorage.getItem("token");
        const owner_id = localStorage.getItem("owner_id");
        const customer = {
            owner_id: owner_id,
            token: token
        };
        return this.http.post(
            this.api_url + '/view_profile',
            customer
        );
    }

    editprofile(data, id) {
        const ownerData = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            id: id,
            first_name: data.first_name,
            last_name: data.last_name,
            gender: data.gender,
            email: data.email,
            mobile: data.mobile,
            dob: data.dob,
            pan_no: data.pan_no,
            adhar_no: data.adhar_no,
            profile_photo: data.profile_photo,

        };
        console.log("gafg", ownerData);
        return this.http.post(
            this.api_url + '/edit_owner',
            ownerData
        );
    }

    editownerprofile(
        first_name,
        last_name,
        gender,
        email,
        mobile,
        dob,
        pan_no,
        adhar_no,
        profile_photo
    ) {
        const token = localStorage.getItem("token");
        const owner_id = localStorage.getItem("owner_id");
        const customer = {
            owner_id: owner_id,
            token: token,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            email: email,
            mobile: mobile,
            dob: dob,
            pan_no: pan_no,
            adhar_no: adhar_no,
            profile_photo: profile_photo
        };
        return this.http.post(
            "http://innolytic.guru/spaces/Webs/edit_owner",
            customer
        );
    }


    viewparking() {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');



        const customer = {
            owner_id: owner_id,
            token: token
        };
        return this.http.post((this.api_url + '/view_parking_info'), customer)
    }


    servicelist() {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const customer = {
            owner_id: owner_id,
            token: token
        };
        return this.http.post(this.api_url + '/service_category_list', customer)
    }


    servicelistcategory(service_cat_id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const customer = {
            owner_id: owner_id,
            token: token,
            service_cat_id: service_cat_id
        };
        return this.http.post(this.api_url + '/get_vendors_by_category', customer)

    }


    servicelistcategorydetail(vendor_id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const customer = {
            owner_id: owner_id,
            token: token,
            vendor_id: vendor_id
        };
        return this.http.post(this.api_url + '/get_vendors_details', customer)

    }

    Addcomplaint(data) {
        const membersData = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            complaint_title: data.complaint_title,
            description: data.description,
            priority: data.priority,

        };
        return this.http.post(
            this.api_url + '/add_owner_complaint',
            membersData
        );
    }

    complaint_list() {
        const user = {
            token: localStorage.getItem("token"),
            owner_id: localStorage.getItem("owner_id")
        };
        return this.http.post(
            this.api_url + '/owner_complaint_list',
            user
        );
    }

    editcomplaint(data, id) {
        const membersData = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            complaint_id: id,
            complaint_title: data.complaint_title,
            description: data.description,
            priority: data.priority,

        };
        console.log("gafg", membersData);
        return this.http.post(
            this.api_url + '/edit_owner_complaint',
            membersData
        );
    }

    deletecomplaint(complaint_id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const customer = {
            owner_id: owner_id,
            token: token,
            complaint_id: complaint_id
        };
        return this.http.post(this.api_url + '/delete_complaint', customer)

    }

    Addvisitors(data) {
        const membersData = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            visitor_name: data.visitor_name,
            person_to_meet: data.person_meet,
            mobile: data.mobile,
            visit_date: data.date,
            visit_time: data.time,
            purpose_of_visit: data.purpose_of_visit
        };
        return this.http.post(
            this.api_url + '/add_visitors',
            membersData
        );
    }

    visitor_list() {
        const user = {
            token: localStorage.getItem("token"),
            owner_id: localStorage.getItem("owner_id")
        };
        return this.http.post(
            this.api_url + '/owner_visitors_list',
            user
        );
    }

    editvisitor(data, id) {
        const membersData = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            visitor_id: id,
            visitor_name: data.visitor_name,
            person_to_meet: data.person_to_meet,
            mobile: data.mobile,
            visit_date: data.visit_date,
            visit_time: data.visit_time,
            purpose_of_visit: data.purpose_of_visit

        };
        console.log("gafg", membersData);
        return this.http.post(
            this.api_url + '/edit_owner_visitors',
            membersData
        );
    }

    deletevisitor(visitor_id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const customer = {
            owner_id: owner_id,
            token: token,
            visitor_id: visitor_id
        };
        return this.http.post(this.api_url + '/delete_visitors', customer)

    }


    // allow_reject_visitor_list(visitor_id,is_confirm,is_reject){
    //     const owner_id= localStorage.getItem('owner_id');
    //     const token =localStorage.getItem('token');

    //     const customer={
    //         owner_id:owner_id,
    //         token:token,
    //         visitor_id:visitor_id,
    //         is_confirm:is_confirm,
    //         is_reject:is_reject

    //     };
    //     return this.http.post(this.api_url+'/visitors_approval',customer)

    // }

    add_recurringservice(data) {
        const user = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            block_id: localStorage.getItem("block_id"),
            flat_no: localStorage.getItem("flat_no"),
            service_type: data.service_type,
            service_name: data.service_name,
            service_frequency: data.service_frequency,
            provider_name: data.provider_name,
            mobile: data.mobile,
            address: data.address,
            service_time: data.service_time
        }
        return this.http.post(this.api_url + "/add_recurring_services", user)
    }

    recurring_service_list() {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/owner_recurring_services_list", user)
    }

    edit_recurring_service(data, recurring_id) {
        const user = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            block_id: localStorage.getItem("block_id"),
            flat_no: localStorage.getItem("flat_no"),
            service_type: data.service_type,
            service_name: data.service_name,
            service_frequency: data.service_frequency,
            provider_name: data.provider_name,
            mobile: data.mobile,
            address: data.address,
            service_time: data.service_time,
            recurring_id: recurring_id
        }
        return this.http.post(this.api_url + "/edit_recurring_services", user)
    }


    delete_recurring_service_list(recurring_id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token')

        const user = {
            owner_id: owner_id,
            token: token,
            recurring_id: recurring_id
        }
        return this.http.post(this.api_url + "/delete_recurring_services", user)
    }


    Add_delivery(data) {
        const membersData = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            block_id: localStorage.getItem("block_id"),
            flat_no: localStorage.getItem("flat_no"),
            delivery_details: data.delivery_details,
            delivery_date: data.delivery_date,
            delivery_time: data.delivery_time,

        };
        return this.http.post(
            this.api_url + '/add_deliveries',
            membersData
        );
    }

    delivery_list() {
        const user = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token")
        };
        return this.http.post(this.api_url + '/owner_deliveries_list', user)
    }


    edit_delivery(data, delivery_id) {
        const delivery_details = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            block_id: localStorage.getItem("block_id"),
            flat_no: localStorage.getItem("flat_no"),
            delivery_id: delivery_id,
            delivery_details: data.delivery_details,
            delivery_date: data.delivery_date,
            delivery_time: data.delivery_time
        }

        return this.http.post(this.api_url + "/edit_owner_deliveries", delivery_details)
    }

    delete_delivery(delivery_id) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const data = {
            owner_id: owner_id,
            token: token,
            delivery_id: delivery_id
        };

        return this.http.post(this.api_url + "/delete_owner_deliveries", data)

    }

    view_events() {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/event_list", user)
    }

    event_details(event_id) {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token'),
            event_id: event_id
        }
        return this.http.post(this.api_url + "/event_details", user)
    }

    view_notice() {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/notice_list", user)
    }

    notice_details(id) {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token'),
            id: id
        }
        return this.http.post(this.api_url + "/notice_details", user)
    }

    view_meeting_list() {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/meetings_list", user)
    }

    metting_detail(id) {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token'),
            id: id
        }
        return this.http.post(this.api_url + "/meetings_details", user)
    }

    Add_vehicle(data) {
        const vehiclesdata = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token'),
            vehicle_type: data.vehicle_type,
            vehicle_no: data.vehicle_no,
            vehicle_name: data.vehicle_name
        }
        return this.http.post(this.api_url + "/add_vehicle", vehiclesdata)
    }

    vehicle_list() {
        const data = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/owner_vehicle_list", data)
    }

    edit_vehicle_list(data, id) {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token'),
            vehicle_type: data.vehicle_type,
            vehicle_no: data.vehicle_no,
            vehicle_name: data.vehicle_name,
            id: id
        }
        return this.http.post(this.api_url + "/edit_owner_vehicle", user)
    }

    delete_vehicle_list(id) {
        const data = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token'),
            id: id
        }
        return this.http.post(this.api_url + "/delete_owner_vehicle", data)
    }



    view_emergency_list() {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/emergency_numbers_list", user)
    }



    add_report(data) {
        const user = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            title: data.title,
            contact_person: data.contact_person,
            priority: data.priority,
            description: data.description
        }
        return this.http.post(this.api_url + "/add_incident_report", user)
    }

    view_report() {
        const user = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token")
        }
        return this.http.post(this.api_url + "/my_incident_report", user)
    }

    delete_report(id) {
        const user = {
            owner_id: localStorage.getItem("owner_id"),
            token: localStorage.getItem("token"),
            id: id
        }
        return this.http.post(this.api_url + "/delete_my_incident_report", user)
    }

    all_report_list() {
        const user = {
            owner_id: localStorage.getItem('owner_id'),
            token: localStorage.getItem('token')
        }
        return this.http.post(this.api_url + "/all_incident_report", user)
    }


    guest_list() {
        const user = {
            token: localStorage.getItem("token"),
            owner_id: localStorage.getItem("owner_id")
        };
        return this.http.post(
            this.api_url + '/guest_list',
            user
        );
    }

    allow_reject_visitor_list(id, is_confirm, is_reject) {
        const owner_id = localStorage.getItem('owner_id');
        const token = localStorage.getItem('token');

        const customer = {
            id: id,
            owner_id: owner_id,
            token: token,
            is_confirm: is_confirm,
            is_reject: is_reject

        };
        return this.http.post(this.api_url + '/approve_reject_guest', customer)
    }

}
