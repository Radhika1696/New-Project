import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    // { path: '', loadChildren: () => import('./pages/walkthrough/walkthrough.module').then(m => m.WalkthroughPageModule) },
    {
        path: "login",
        loadChildren: () =>
            import("./pages/login/login.module").then(m => m.LoginPageModule)
    },
    {
        path: "register",
        loadChildren: () =>
            import("./pages/register/register.module").then(
                m => m.RegisterPageModule
            )
    },
    {
        path: "home",
        loadChildren: () =>
            import("./pages/home/home.module").then(m => m.HomePageModule)
    },
    // {
    //     path: "edit-profile",
    //     loadChildren: () =>
    //         import("./pages/edit-profile/edit-profile.module").then(
    //             m => m.EditProfilePageModule
    //         )
    // },
    {
        path: "settings",
        loadChildren: () =>
            import("./pages/settings/settings.module").then(
                m => m.SettingsPageModule
            )
    },
    {
        path: "hotel-list",
        loadChildren: () =>
            import("./pages/hotel-list/hotel-list.module").then(
                m => m.HotelListPageModule
            )
    },
    {
        path: "hotel-detail",
        loadChildren: () =>
            import("./pages/hotel-detail/hotel-detail.module").then(
                m => m.HotelDetailPageModule
            )
    },
    {
        path: "hotel-checkout",
        loadChildren: () =>
            import("./pages/hotel-checkout/hotel-checkout.module").then(
                m => m.HotelCheckoutPageModule
            )
    },
    {
        path: "cars-list",
        loadChildren: () =>
            import("./pages/cars-list/cars-list.module").then(
                m => m.CarsListPageModule
            )
    },
    
    {
        path: "booking-list",
        loadChildren: () =>
            import("./pages/booking-list/booking-list.module").then(
                m => m.BookingListPageModule
            )
    },
    {
        path: "favorites",
        loadChildren: () =>
            import("./pages/favorites/favorites.module").then(
                m => m.FavoritesPageModule
            )
    },
    {
        path: "local-weather",
        loadChildren: () =>
            import("./pages/local-weather/local-weather.module").then(
                m => m.LocalWeatherPageModule
            )
    },
    {
        path: "about",
        loadChildren: () =>
            import("./pages/about/about.module").then(m => m.AboutPageModule)
    },
    {
        path: "support",
        loadChildren: () =>
            import("./pages/support/support.module").then(
                m => m.SupportPageModule
            )
    },
    {
        path: "messages",
        loadChildren: () =>
            import("./pages/messages/messages.module").then(
                m => m.MessagesPageModule
            )
    },
    {
        path: "message",
        loadChildren: () =>
            import("./pages/message/message.module").then(
                m => m.MessagePageModule
            )
    },
    // {
    //     path: "rentcar",
    //     loadChildren: () =>
    //         import("./pages/rentcar/rentcar.module").then(
    //             m => m.RentcarPageModule
    //         )
    // },
   
    {
        path: "car-detail",
        loadChildren: () =>
            import("./pages/car-detail/car-detail.module").then(
                m => m.CarDetailPageModule
            )
    },
    {
        path: "car-checkout",
        loadChildren: () =>
            import("./pages/car-checkout/car-checkout.module").then(
                m => m.CarCheckoutPageModule
            )
    },
    {
        path: "location",
        loadChildren: () =>
            import("./pages/modal/location/location.module").then(
                m => m.LocationPageModule
            )
    },
    {
        path: "activities",
        loadChildren: () =>
            import("./pages/activities/activities.module").then(
                m => m.ActivitiesPageModule
            )
    },
    {
        path: "activity-list",
        loadChildren: () =>
            import("./pages/activity-list/activity-list.module").then(
                m => m.ActivityListPageModule
            )
    },
    {
        path: "activity-detail",
        loadChildren: () =>
            import("./pages/activity-detail/activity-detail.module").then(
                m => m.ActivityDetailPageModule
            )
    },
    {
        path: "walkthrough",
        loadChildren: () =>
            import("./pages/walkthrough/walkthrough.module").then(
                m => m.WalkthroughPageModule
            )
    },
    {
        path: "activity-checkout",
        loadChildren: () =>
            import("./pages/activity-checkout/activity-checkout.module").then(
                m => m.ActivityCheckoutPageModule
            )
    },
  { path: 'deliverylist', 
  loadChildren:() =>
  import( './pages/deliverylist/deliverylist.module').then(
      m => m.DeliverylistPageModule
  )
 },

  { path: 'adddelivery',
   loadChildren:() =>
   import( './pages/adddelivery/adddelivery.module').then(
       m => m.AdddeliveryPageModule
   )
 },
  { path: 'edit-complaint', 
  loadChildren:() =>
  import("./pages/edit-complaint/edit-complaint.module").then(
      m => m.EditComplaintPageModule
  ) 
 },

 { path: 'edit-delivery', 
 loadChildren:() =>
 import("./pages/edit-delivery/edit-delivery.module").then(
     m => m.EditDeliveryPageModule
 ) 
},

{ path: 'edit-visitor', 
loadChildren:() =>
import("./pages/edit-visitor/edit-visitor.module").then(
    m => m.EditVisitorPageModule
) 
},
{ path: 'add-vehicle', 
loadChildren:() =>
import("./pages/add-vehicle/add-vehicle.module").then(
    m => m.AddVehiclePageModule
) 
},
{ path: 'vehicle-list', 
loadChildren:() =>
import("./pages/vehicle-list/vehicle-list.module").then(
    m => m.VehicleListPageModule
) 
},
{ path: 'edit-vehicle', 
loadChildren:() =>
import("./pages/edit-vehicle/edit-vehicle.module").then(
    m => m.EditVehiclePageModule
) 
},

{ path: 'meeting-list', 
loadChildren:() =>
import("./pages/meeting-list/meeting-list.module").then(
    m => m.MeetingListPageModule
) 
},
{ path: 'meeting-detail', 
loadChildren:() =>
import("./pages/meeting-detail/meeting-detail.module").then(
    m => m.MeetingDetailPageModule
) 
},
{ path: 'recurring-service-list', 
loadChildren:() =>
import("./pages/recurring-service-list/recurring-service-list.module").then(
    m => m.RecurringServiceListPageModule
) 
},
{ path: 'edit-recurring-service', 
loadChildren:() =>
import("./pages/edit-recurring-service/edit-recurring-service.module").then(
    m => m.EditRecurringServicePageModule
) 
},
{ path: 'incident-report-list', 
loadChildren:() =>
import("./pages/incident-report-list/incident-report-list.module").then(
    m => m.IncidentReportListPageModule
) 
},
{ path: 'incident-report', 
loadChildren:() =>
import("./pages/incident-report/incident-report.module").then(
    m => m.IncidentReportPageModule
) 
},
{ path: 'grain-flour-list', 
loadChildren:() =>
import("./pages/grain-flour-list/grain-flour-list.module").then(
    m => m.GrainFlourListPageModule
) 
},
{ path: 'cart', 
loadChildren:() =>
import("./pages/cart/cart.module").then(
    m => m.CartPageModule
) 
},

{ path: 'contact', 
loadChildren:() =>
import("./pages/contact/contact.module").then(
    m => m.ContactPageModule
)
},
{ path: 'instant-mixex-list', 
loadChildren:() =>
import("./pages/instant-mixex-list/instant-mixex-list.module").then(
    m => m.InstantMixexListPageModule
) 
},

{ path: 'traditional-flours-list', 
loadChildren:() =>
import("./pages/traditional-flours-list/traditional-flours-list.module").then(
    m => m.TraditionalFloursListPageModule
) 
},

{ path: 'orders', 
loadChildren:() =>
import("./pages/orders/orders.module").then(
    m => m.OrdersPageModule
) 
},

{ path: 'order-details/:order_id', 
loadChildren:() =>
import("./pages/order-details/order-details.module").then(
    m => m.OrderDetailsPageModule
) 
},
{ path: 'summary', 
loadChildren:() =>
import("./pages/summary/summary.module").then(
    m => m.SummaryPageModule
) 
},
{ path: 'item-details', 
loadChildren:() =>
import("./pages/item-details/item-details.module").then(
    m => m.ItemDetailsPageModule
) 
},
//   {
//     path: 'summary',
//     loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
//   },
//   {
//     path: 'item-details',
//     loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
//   },

//   {
//     path: 'orders',
//     loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
//   },
//   {
//     path: 'order-details',
//     loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
//   },




];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
