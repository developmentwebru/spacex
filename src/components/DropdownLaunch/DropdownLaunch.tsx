import React from "react";
import { connect } from "react-redux";
import { launchpadsFilterAction } from "../../actions/filterForLaunchpads";

export class DropdownLaunchSite extends React.Component<any>{

    render() {
        return (<div className='dropdown_launch'>
            <p>Launch Pads</p>
            <select defaultValue={'all'} onChange={(e) => this.props.filter(e.target.value)}>
                <option value={'all'}  >Select pad</option>
                {this.props.launchpads.map((i: any) => {
                    return <option value={i.site_id}
                        key={i.id + i.site_name_long}>{i.site_name_long}
                    </option>
                })}
            </select>
        </div>)
    }
}

export const mapStateToProps = (state: any) => ({
    launchpads: state.launchpads
});

export const mapDispatchToProps = (dispatch: any) => ({
    filter: (id: string) => dispatch(launchpadsFilterAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownLaunchSite);
