using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Diagnostics;

namespace WebSocketServer
{
    class Program
    {
       static Dictionary<string, User> all_users = new Dictionary<string, User>();

        static void Main(string[] args)
        {
           

            Server server = new Server(new IPEndPoint(IPAddress.Parse("127.0.0.1"), 80));
          
          
            server.OnClientConnected += (object sender, OnClientConnectedHandler e) => 
            {

                all_users.Add(e.GetClient().GetGuid(), new User("", e.GetClient()));

                Console.WriteLine("Client with GUID: {0} Connected!", e.GetClient().GetGuid());
            };


            server.OnClientDisconnected += (object sender, OnClientDisconnectedHandler e) =>
            {
               
                Console.WriteLine("Client {0} Disconnected", e.GetClient().GetGuid());
            };


            server.OnMessageReceived += (object sender, OnMessageReceivedHandler e) =>
            {
                string[] values = e.GetMessage().Split(',');

                if (values[0] == "1")
                {

                    all_users[e.GetClient().GetGuid()].kind = values[1];
                    server.SendMessage(all_users[e.GetClient().GetGuid()].cl,"GOOD");
                }

                if (values[0] == "2")
                {
                    foreach(KeyValuePair<string,User> pair in all_users)
                    {
                        if (pair.Value.kind == "AUTO")
                        {
                            server.SendMessage(pair.Value.cl, "GOOD");
                        }
                    }

                }

                Console.WriteLine("Received Message: '{1}' from client: {0}", e.GetClient().GetGuid(), e.GetMessage());
            };

            server.OnSendMessage += (object sender, OnSendMessageHandler e) =>
            {
                Console.WriteLine("Sent message: '{0}' to client {1}", e.GetMessage(), e.GetClient().GetGuid());
            };


           
            // Close the application only when the close button is clicked
            Process.GetCurrentProcess().WaitForExit();
        }


        public class User
        {

            public string kind;
            public Client cl;
            public User(string k,Client c)
            {
                this.kind = k;
                this.cl = c;
            }



        }


    }
}
