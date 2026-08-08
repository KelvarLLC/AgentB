export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  const {email,source='website'}=req.body||{};
  if(!email || !String(email).includes('@')) return res.status(400).json({error:'Valid email required'});
  // Provider-neutral automation hook. Connect a CRM/email provider with environment variables.
  // Never commit credentials or private customer data to the repository.
  console.log(JSON.stringify({event:'lead.created',email,source,at:new Date().toISOString()}));
  return res.status(200).json({ok:true,message:'Lead accepted'});
}
