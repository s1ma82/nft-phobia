import { CardList } from "../CardsList/CardList"
import { BigBanner, StatsBlock, SponsorsBlock, Title } from "../components"

export default () => {
    return (
        <>
            <BigBanner 
            description='The Larges NFT Marketplace. Automatic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technologi'>Create Your Own NFT Dream Gallery 
            </BigBanner>
            <SponsorsBlock/>
            <CardList/>
        </>
    )
}