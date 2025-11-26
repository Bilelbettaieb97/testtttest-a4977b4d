import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare, Users, TrendingUp, Clock, Calendar, Eye } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Conversation {
  id: string;
  created_at: string;
  first_message: string;
  total_messages: number;
  status: string;
  messages?: Message[];
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
}

interface Stats {
  totalConversations: number;
  totalMessages: number;
  avgMessagesPerConversation: number;
  activeConversations: number;
}

const ChatAnalytics = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({
    totalConversations: 0,
    totalMessages: 0,
    avgMessagesPerConversation: 0,
    activeConversations: 0,
  });
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      // Fetch conversations
      const { data: conversationsData, error: convError } = await supabase
        .from("chat_conversations")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      if (convError) throw convError;

      // Fetch all messages count
      const { count: messagesCount, error: msgError } = await supabase
        .from("chat_messages")
        .select("*", { count: "exact", head: true });

      if (msgError) throw msgError;

      const conversations = conversationsData || [];
      const activeConvs = conversations.filter((c) => c.status === "active").length;
      const totalMsgs = messagesCount || 0;
      const avgMsgs = conversations.length > 0 ? totalMsgs / conversations.length : 0;

      setStats({
        totalConversations: conversations.length,
        totalMessages: totalMsgs,
        avgMessagesPerConversation: Math.round(avgMsgs * 10) / 10,
        activeConversations: activeConvs,
      });

      setConversations(conversations);
    } catch (error) {
      console.error("Error loading analytics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadConversationMessages = async (conversationId: string) => {
    try {
      const { data: messages, error } = await supabase
        .from("chat_messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true });

      if (error) throw error;

      const conversation = conversations.find((c) => c.id === conversationId);
      if (conversation) {
        setSelectedConversation({ 
          ...conversation, 
          messages: (messages || []).map(msg => ({
            id: msg.id,
            role: msg.role as "user" | "assistant",
            content: msg.content,
            created_at: msg.created_at
          }))
        });
      }
    } catch (error) {
      console.error("Error loading messages:", error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Analytics Chatbot
            </h1>
            <p className="text-gray-600">
              Analysez les conversations et identifiez les opportunités
            </p>
          </div>
          <Button onClick={() => navigate("/")}>
            Retour à l'accueil
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Conversations
              </CardTitle>
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                <AnimatedCounter end={stats.totalConversations} />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Depuis le lancement
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Messages
              </CardTitle>
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                <AnimatedCounter end={stats.totalMessages} />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Échanges au total
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Moyenne Messages
              </CardTitle>
              <Users className="w-5 h-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {stats.avgMessagesPerConversation}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Par conversation
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Conversations Actives
              </CardTitle>
              <Clock className="w-5 h-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                <AnimatedCounter end={stats.activeConversations} />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                En cours actuellement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Conversations List */}
        <Card className="border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Dernières Conversations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                  <p className="text-gray-600 mt-4">Chargement des données...</p>
                </div>
              ) : conversations.length === 0 ? (
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">Aucune conversation pour le moment</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className="p-4 border-2 border-gray-100 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => loadConversationMessages(conversation.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-500">
                              {formatDate(conversation.created_at)}
                            </span>
                            <Badge
                              variant={
                                conversation.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                              className="ml-2"
                            >
                              {conversation.status}
                            </Badge>
                          </div>
                          <p className="text-gray-700 font-medium line-clamp-2">
                            {conversation.first_message || "Aucun message"}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className="bg-purple-100 text-purple-700">
                            {conversation.total_messages} messages
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Voir détails
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Conversation Detail Dialog */}
      <Dialog
        open={!!selectedConversation}
        onOpenChange={() => setSelectedConversation(null)}
      >
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Détails de la conversation
            </DialogTitle>
            <p className="text-sm text-gray-500">
              {selectedConversation &&
                formatDate(selectedConversation.created_at)}
            </p>
          </DialogHeader>
          <ScrollArea className="h-[500px] pr-4">
            {selectedConversation?.messages?.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  <div className="text-xs opacity-70 mb-1">
                    {message.role === "user" ? "Visiteur" : "Assistant"}
                  </div>
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatAnalytics;
