import { Outlet } from "react-router";

function ProjectOutlet () {

    return (
        <div className="min-h-screen px-40 py-15 bg-slate-900">
            <Outlet />
        </div>
    )
}

export default ProjectOutlet;