export default async function handler(req,res){
  if(req.method!=='GET' && req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  // Daily automation hook. Connect email, CRM, analytics, payments, or other services here.
  // Keep secrets in Vercel environment variables.
  const run={job:'daily-business-automation',status:'ready',timestamp:new Date().toISOString(),nextSteps:['process new leads','send configured follow-ups','refresh metrics','queue customer tasks']};
  console.log(JSON.stringify(run));
  return res.status(200).json(run);
}
