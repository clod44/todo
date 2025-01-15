import GradientBox from "@components/GradientBox"
const Topbar = () => {

    return (
        <div className="fixed left-0 top-0 w-full z-50">
            <GradientBox angle={180} start='0' className='py-3 pointer-events-none'>
                {null} {/* shut the fuck up eslint */}
            </GradientBox>
        </div>
    )
}

export default Topbar