import React, {useContext, useEffect} from 'react'
import {messagesContext , nameContext , roomContext} from '../Chat/Chat'


export const Sidebar = ({styles}) => {
    const messages = useContext(messagesContext) ; 
const name = useContext(nameContext) ; 
const room = useContext(roomContext) ;
    return (
            <div className={styles.info}>
                        <div className={styles.logo}>
                            ONE Chat
                        </div><br />
                        <div className={styles.users}>
                            <big>
                                Users in chat
                            </big>
                            <div className={styles.users__wrapper}>
                            <li className={styles.user}>Bhaiya</li>
                            <li className={styles.user}>Abhinav</li>
                            <li className={styles.user}>Shanky</li>
                            <li className={styles.user}>Bunny</li>
                            </div>
                        </div>
                    </div>
    )
}

export  function MainChat({styles}) {
    const messages = useContext(messagesContext) ; 
const name = useContext(nameContext) ; 
const room = useContext(roomContext) ;

    return (
        <div className={styles.chat}>
            <div className={styles.room__info}>
                <big className = {styles.room__name}>Room-{room}</big>
                <button className = {styles.leave}>Leave room</button>
            </div>
            <div className = {styles.main__chat}>
                <h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi beatae veritatis recusandae explicabo voluptatum, minus quod pariatur nulla. Aliquam sapiente enim aspernatur porro eligendi iste excepturi doloremque dolor iure fugiat perspiciatis eius quasi expedita, unde suscipit eveniet est cupiditate explicabo? Corporis, accusantium voluptas temporibus odit officiis, libero, atque harum unde perferendis sapiente facere! Quasi porro blanditiis maxime aperiam corporis illum officia voluptas, tempora dignissimos dolorem. Corrupti assumenda illo magni obcaecati amet consequatur, id quia consequuntur, qui libero deserunt vel iusto, ipsum tempore sint quam quasi cupiditate quos voluptate voluptatem nam deleniti maiores beatae. Quasi ex animi sint, nesciunt omnis in, fuga quam nobis itaque dolores qui neque ducimus ut nulla quidem iste, accusantium vitae quisquam sunt blanditiis veritatis ullam quo. Dignissimos expedita quasi iure fugit cum, ducimus quis, fugiat non ad, velit ipsum ipsam at. Cupiditate voluptates a, cum odit ipsa culpa, quisquam repellendus saepe quam, nisi accusantium nesciunt nobis explicabo esse nihil officia consequuntur enim eos quasi sapiente ea autem eveniet quas? Sed harum accusantium eaque deserunt. Ducimus incidunt aspernatur ut quisquam, dignissimos dolores sit corporis cum, eveniet quo voluptas aliquam voluptate culpa provident! Ea possimus iusto non quibusdam neque maiores enim assumenda iure commodi, natus maxime aliquid dignissimos eligendi rerum debitis repellendus sapiente cum voluptates. Modi accusamus harum minus. Quisquam ad ea, repudiandae corrupti cum eveniet expedita quaerat placeat non possimus? Facilis, recusandae impedit commodi pariatur voluptatem deleniti saepe adipisci. Enim voluptatem, quisquam cumque officia veniam nobis corporis sit deserunt esse, sed, quos sequi. Culpa, reiciendis hic! Aut perspiciatis voluptatum rem, et vitae sunt sapiente placeat iure aliquid facere, hic quo sequi aliquam libero! Aspernatur corrupti iste, maxime perferendis cum laborum in autem quos ipsam repellat inventore quo et dolorum quis aliquid repellendus beatae obcaecati consequatur. Obcaecati possimus amet quia unde, corrupti quam dolorum natus dolores, quae incidunt laudantium nam! Quaerat aliquid, nisi maxime corrupti cum praesentium molestias ad esse alias nesciunt reprehenderit, iure laboriosam itaque odit harum a placeat sed possimus ipsam. Laboriosam, voluptatum. Sequi rem ea tenetur libero reprehenderit ipsam deleniti beatae, cupiditate temporibus explicabo quae qui veritatis assumenda aut sunt magnam maxime nisi iste voluptatem earum dignissimos odio voluptates laborum nam. Sapiente, laudantium. Accusamus perspiciatis facere consequuntur laudantium esse sit voluptatem aspernatur ea! Mollitia, laborum facere? Eligendi, porro. Aliquam necessitatibus, quas provident nemo sunt natus facilis similique rerum incidunt laborum beatae rem possimus. Eius inventore nihil neque magnam dolores suscipit incidunt, beatae quam quidem culpa! Et, ratione! Similique corrupti quae harum excepturi magnam vitae doloribus a saepe architecto, illo ipsa incidunt nihil nobis vero, laudantium molestiae iure repellat! Voluptas suscipit iure sapiente molestiae esse similique beatae temporibus error! Rerum voluptas aliquid vitae fugiat ipsam accusantium assumenda enim voluptatem suscipit quae aut, nisi expedita ipsa! Quas at, optio maxime totam nobis labore dolore nemo dolorum cum, eos consequatur laboriosam placeat quam magnam reprehenderit nesciunt necessitatibus facilis et. Alias eveniet, facilis quis nobis corrupti aperiam necessitatibus cumque inventore voluptatum id placeat ipsa perspiciatis praesentium ab quasi ipsam incidunt velit consequatur consectetur perferendis hic voluptate sint! Dignissimos ratione, in repellat voluptatibus pariatur et. Porro officiis ratione incidunt quaerat, placeat, labore praesentium pariatur eaque, aperiam sapiente aut dolores. Accusamus voluptatem incidunt nemo eum iusto, provident laudantium eaque quidem. Cupiditate ea praesentium quod vel dolor corrupti itaque deleniti nisi tenetur suscipit cumque fugit odio veniam earum nobis sapiente rerum in distinctio ipsum consequuntur vero, quidem eveniet optio! Maiores sequi inventore magnam! Voluptates eum sit illum minus similique error, molestiae quaerat? Omnis, repellendus eligendi modi consequuntur id molestias! Ex delectus reiciendis, nam voluptate sapiente aliquam dolor porro autem dolores vero deleniti ut deserunt assumenda? Incidunt sapiente harum modi, fuga nesciunt dolorum sunt error earum inventore repudiandae, corrupti optio deleniti nam neque est, perferendis iste maxime exercitationem eius quas itaque! Officiis necessitatibus similique quidem atque repellendus laboriosam esse dignissimos repudiandae quasi non. Sunt aperiam, accusamus, eum ipsam omnis dolore consequuntur laborum mollitia minima nesciunt quas enim vitae reiciendis! Inventore illum rem quisquam voluptate autem praesentium sapiente laborum, esse ex, rerum amet odio aliquam id voluptatem in ad fuga at, dolores provident veniam? Officiis explicabo consequuntur asperiores earum, nobis iusto aliquam nisi, sequi quam a provident quibusdam harum laudantium, sint porro ea libero nam. Vitae, eveniet, neque nobis, officia voluptate laudantium veniam beatae aspernatur vel enim dolorum cupiditate voluptatibus? Illo porro eligendi sapiente quo eius rem dolor in, esse quasi sint molestias dolorum! At harum nostrum laborum alias, accusamus error vero minus aperiam nulla deserunt dolorem, corporis odit aut voluptate omnis aspernatur incidunt cumque animi consequuntur! Saepe et aperiam quis, illum veritatis fuga veniam, rem maxime omnis architecto inventore sapiente fugiat facere vel cum hic animi rerum ab, a assumenda. Quis reprehenderit ex iusto molestias qui dolorem, repellendus ab ipsum consequatur itaque quisquam odit aliquid ratione inventore provident ut fugiat veniam distinctio mollitia aliquam officia? Neque quibusdam fugit hic beatae dolore, ut minus obcaecati voluptatem. Quo error fugiat, tempore eveniet praesentium magnam itaque natus saepe? Blanditiis enim tenetur rem molestias eius modi officiis aut dicta facere error corporis iure eveniet nihil similique itaque sunt, explicabo a eaque delectus quis? Tenetur earum at vero assumenda saepe, repudiandae voluptatem veritatis amet odio possimus ipsam provident, eveniet quod dolor accusantium eius incidunt temporibus debitis asperiores laborum facere impedit. Consequatur accusantium voluptatibus iusto repudiandae, voluptate eligendi magni dignissimos ullam assumenda neque unde in quos vero ipsa. Quae totam beatae explicabo optio minima distinctio blanditiis consequatur. Consequuntur ex consectetur omnis. Perferendis fuga quod aperiam saepe deserunt vero voluptatem inventore amet dolores voluptates provident earum ratione, sunt id adipisci dicta pariatur recusandae molestias temporibus vitae accusantium quia officia! Tenetur, saepe. Exercitationem repudiandae natus temporibus culpa eos adipisci deserunt! Molestiae explicabo exercitationem delectus, aspernatur error eos tempore repellendus, rem voluptatem nulla deserunt quaerat veritatis ex quas atque iure tenetur magnam ipsum ullam est velit quibusdam doloribus ipsam sapiente! Provident ea alias nulla fugit nobis, eius similique omnis laudantium dolorum et, totam, culpa delectus deleniti. Nam suscipit non, nulla quisquam expedita fuga iure, saepe dolore molestias inventore aliquam minus a nemo nihil? Aperiam in fugit magni blanditiis aut iusto libero qui.
                </h1>
            </div>
            <div className = {styles.form}>
                <h1>HELLO</h1>
            </div>
        </div>
    )
}


