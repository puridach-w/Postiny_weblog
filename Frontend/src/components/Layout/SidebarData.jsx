import React from 'react'
import HomeIcon from '@material-ui/icons/HomeRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import Wallet from '@material-ui/icons/AccountBalanceWalletRounded';
import ReportRoundedIcon from '@material-ui/icons/ReportRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon style={{ fontSize: 30 }} />,
        link: "/home"
    },
    {
        title: "Dashboard",
        icon: <DashboardRoundedIcon style={{ fontSize: 30 }} />,
        link: "/dashboard"
    },
    {
        title: "Wallet",
        icon: <Wallet style={{ fontSize: 30 }} />,
        link: "/wallet"
    },
]

const SidebarData2 = [
    {
        title: "Report",
        icon: <ReportRoundedIcon style={{ fontSize: 30 }} />,
        link: "/report"
    },
    {
        title: "Sign out",
        icon: <ExitToAppRoundedIcon style={{ fontSize: 30 }} />,
        link: "/signout"
    }
]
const SidebarData3 = [
    {
        title: "Report",
        icon: <ReportRoundedIcon style={{ fontSize: 30 }} />,
        link: "/report-admin"
    }
]

const SidebarData4 = [
    {
        title: "Top-up",
        icon: <DoneRoundedIcon style={{ fontSize: 30 }} />,
        link: "/payment"
    },
    {
        title: "Claim",
        icon: <CurrencyExchangeIcon style={{ fontSize: 30 }} />,
        link: "/claimrequest"
    }
]
    
const SidebarData5 = [
    {
        title: "Sign out",
        icon: <ExitToAppRoundedIcon style={{ fontSize: 30 }} />,
        link: "/signout"
    }
]

export {SidebarData,SidebarData2,SidebarData3,SidebarData4,SidebarData5};
