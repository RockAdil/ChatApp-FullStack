/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = ({ user }) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='9bf21973-e8c8-4278-852a-210921cdad47'
        username={user.username}
        secret={user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;
