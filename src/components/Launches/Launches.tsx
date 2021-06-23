import React from 'react'
import { connect } from "react-redux";
import { getDataMissions } from "../../actions/getDataLaunches";
import { getDataRocket } from "../../actions/getDataRocket";
import { getDataLaunchSite } from "../../actions/getDataLaunchSite";
import './Launches.css'


export class GetData extends React.Component<any> {
    isData = true;
    componentDidMount() {
        this.props.onGetData();
        this.props.getGetRocket();
        this.props.getGetLaunchSite()
    }

    filteringRocketAndLaunchpad(): any {
        const launches = this.props.launches.filter((obj: any) => obj['rocket']['rocket_name'] === this.props.filterValue.falconId)

            .filter((obj: any) => obj['launch_site']['site_id'] === this.props.filterValue.launchpadId);


        return this.checkArrayLength(launches);
    }

    filteringLaunchpad(): any {
        const launches = this.props.launches.filter((obj: any) => obj['launch_site']['site_id'] === this.props.filterValue.launchpadId);

        return this.checkArrayLength(launches);
    }

    filteringRocket(): any {
        const launches = this.props.launches.filter((obj: any) => obj['rocket']['rocket_name'] === this.props.filterValue.falconId)
        return this.checkArrayLength(launches);
    }

    checkArrayLength(arr: any) {
        if (arr.length === 0) {
            this.isData = false
        } else {
            this.isData = true;
            return arr
        }
    }

    isSortedArray() {
        if (this.props.filterValue.falconId !== 'all' && this.props.filterValue.launchpadId !== 'all') {
            return this.filteringRocketAndLaunchpad();
        } else if (this.props.filterValue.falconId !== 'all') {
            return this.filteringRocket()
        } else if (this.props.filterValue.launchpadId !== 'all') {
            return this.filteringLaunchpad();
        }
        this.isData = true;
        return this.props.launches;
    }

    formatData(fireDate: string): string {
        if (fireDate === null) {
            return "DD.MM.YYYY";
        } else {
            return fireDate.replace(/T.*/, "").split('-').reverse().join('.');
        }
    }

    render() {
        const card = this.isSortedArray();
        if (this.isData) {

            return card.map((i: any) => {
                return (
                    <div key={i.mission_name + '1'}>
                        <div className='card__head'>
                            <div className="card">
                                <img src={i['links']['mission_patch_small']} alt={i.mission_name} className='img_card' />
                                <div className="card__container">
                                    <h1><b>{i.mission_name ? i.mission_name : "Mission Name"}</b></h1>
                                    {
                                        this.formatData(i.launch_date_local)
                                    }
                                    <p>{i.details ? i.details : i.upcoming ? 'Upcoming' : 'No details'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            return (<h1>No data</h1>)
        }
    }

}

export const mapStateToProps = (state: any) => ({
    launches: state.launches,
    filterValue: state.filterValue
});

export const mapDispatchToProps = (dispatch: any) => ({
    onGetData: (): any => dispatch(getDataMissions()),
    getGetRocket: (): any => dispatch(getDataRocket()),
    getGetLaunchSite: (): any => dispatch(getDataLaunchSite())
});
export default connect(mapStateToProps, mapDispatchToProps)(GetData);
