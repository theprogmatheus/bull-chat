// import styles
import './styles/Chat.css';

// import hooks
import { useState } from 'react';

// import components
import ChatBanner from './ChatBanner';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';

const Chat = () => {

    const [chatData, setChatData] = useState([

        {
            username: "Sheldon",
            message: "hi guys",
            me: true,
            chatColor: '#55e9fa'
        },

        {
            username: "Lukas",
            message: "Hello Sheldon, whats'up?",
            me: false,
            chatColor: '#c5fa32'
        },

        {
            username: "Amanda",
            message: "Hi Sheldon :)",
            me: false,
            chatColor: '#ff94e8'
        },

        {
            username: "anonymous",
            message: "vel suscipit leo ipsum at ex. In quis ultrices nisl. Morbi id sapien nunc. Ut ultrices sodales nibh, ut finibus ante malesuada eu. Pellentesque urna est, porttitor et turpis eget, euismod rhoncus urna. Nulla tristique orci lectus, non condimentum augue pretium ac. Nullam vitae dolor blandit, tempus metus vel, porttitor sem. Vestibulum vel sem ut dui finibus pellentesque sit amet eget turpis. Nunc nec diam malesuada, hendrerit magna et, consequat mi.",
            me: false,
            chatColor: "#969696"
        },

        {
            username: "anonymous",
            message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue odio, iaculis ultrices enim ut, ultricies placerat enim. Duis vel lacus eget felis semper placerat sit amet in diam. Suspendisse potenti. Aliquam maximus ipsum ante, non tincidunt felis dictum quis. Nunc ac massa molestie, lobortis tellus quis, eleifend ante. Nullam neque risus, viverra suscipit vestibulum non, fringilla in felis. Vestibulum non pharetra ipsum. Sed nulla risus, malesuada eget iaculis sed, accumsan quis nulla. Nunc sed mattis tortor, vitae dictum tellus. Aenean orci nulla, fringilla sed nisi ac, porta interdum dolor. Integer sed justo eget orci efficitur dapibus at vel metus. Praesent ut turpis eget leo porttitor efficitur. Duis sed pretium enim. Proin fermentum cursus luctus. Donec feugiat orci mauris, non varius lectus dictum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Nam nec quam lorem. Suspendisse id est tortor. Vestibulum ut commodo tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie tempus ligula vel pretium. Etiam gravida nisl ut nibh dapibus posuere. Integer non mollis enim. Aliquam erat volutpat. Curabitur sagittis ante a mi congue, sit amet varius nisl aliquet. Mauris quis vulputate metus. Aliquam nec augue mollis, finibus libero at, vestibulum dui. Proin efficitur sapien nisl, ut rhoncus lorem pharetra ac. Maecenas tincidunt lectus eget maximus molestie. Cras eget urna purus. Duis porttitor, turpis sed tristique bibendum, felis metus dictum magna, sed dictum sem velit in lacus.
            
            Pellentesque bibendum nibh at lectus semper, ut rhoncus enim convallis. Nullam rhoncus, lectus at sagittis egestas, tortor dolor facilisis urna, vel suscipit leo ipsum at ex. In quis ultrices nisl. Morbi id sapien nunc. Ut ultrices sodales nibh, ut finibus ante malesuada eu. Pellentesque urna est, porttitor et turpis eget, euismod rhoncus urna. Nulla tristique orci lectus, non condimentum augue pretium ac. Nullam vitae dolor blandit, tempus metus vel, porttitor sem. Vestibulum vel sem ut dui finibus pellentesque sit amet eget turpis. Nunc nec diam malesuada, hendrerit magna et, consequat mi. Quisque semper neque vitae euismod sodales. Ut justo magna, ornare sit amet est tincidunt, hendrerit commodo nisl. Etiam dictum, elit eu tristique faucibus, metus augue rutrum sapien, et tempor diam odio ut justo. Integer et sapien mauris. Nulla luctus sodales leo, et aliquam massa tempus vel.
            
            Phasellus blandit eros urna, vitae mattis est iaculis in. Donec feugiat felis ac magna volutpat aliquet. Duis id mattis lorem, condimentum mattis sapien. Aenean in odio sit amet nibh vehicula molestie. Nullam maximus eget augue at lobortis. Nulla vitae nulla felis. Curabitur risus urna, mattis id velit ut, volutpat posuere eros. Proin ac dictum odio. Sed porta ipsum nec ante aliquet suscipit.
            
            Pellentesque tincidunt feugiat felis at tempor. Suspendisse et efficitur dolor. Sed finibus viverra justo, vel pellentesque tortor porttitor non. Nam tincidunt, risus non maximus fermentum, tortor ligula imperdiet lectus, sed euismod est dui a est. Nullam a aliquet elit. Aliquam condimentum, orci id tempus fermentum, neque lacus facilisis ipsum, vitae rutrum mi lectus pretium ex. Etiam sit amet nulla posuere, rhoncus sapien ut, vulputate elit. Fusce malesuada neque mi, eu tincidunt sapien fermentum vitae. Praesent ullamcorper nisl a dui convallis tristique. Etiam et rhoncus urna, a placerat neque. Nunc a dolor nec risus consequat scelerisque nec ut mi. Aliquam lobortis fringilla mattis. Morbi sed vehicula lacus, nec efficitur magna. Donec in sapien mauris.`,
            me: false,
            chatColor: "#969696"
        },


        {
            username: "Sheldon",
            message: "Ok? lol, wtf is this?",
            me: true,
            chatColor: '#55e9fa'
        },


        {
            username: "Lukas",
            message: "lol, what is this man? what is mean?",
            me: false,
            chatColor: '#c5fa32'
        },

        {
            username: "Amanda",
            message: "😨",
            me: false,
            chatColor: '#ff94e8'
        },

        {
            username: "anonymous",
            message: "foget it 🙄",
            me: false,
            chatColor: "#969696"
        },


        {
            username: "Sheldon",
            message: "Ok 😂😂😂😂",
            me: true,
            chatColor: '#55e9fa'
        },

    ]);


    return (
        <div className="chat">
            <ChatBanner />
            <ChatContent chatContent={chatData} />
            <ChatInput setChatData={setChatData} />
        </div>
    )
}

export default Chat