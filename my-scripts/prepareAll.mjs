import { exec } from 'child_process';
import { promisify } from 'util';

const run = promisify(exec);

const scripts = [
  'node ./my-scripts/prepareExperiences.mjs',
  'node ./my-scripts/prepareProjects.mjs',
  'node ./my-scripts/prepareFormations.mjs',
  'node ./my-scripts/prepareImages.mjs',
];
if (process.env.VERCEL === '1') {
  console.log("🛑 Skipping prepareAll.mjs on Vercel");
  process.exit(0);
}
(async () => {
  for (const cmd of scripts) {
    console.log(`🚀 Running: ${cmd}`);
    try {
      const { stdout, stderr } = await run(cmd);
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
    } catch (err) {
      console.error(`❌ Error running ${cmd}`, err);
      process.exit(1);
    }
  }

  console.log('✅ Tous les scripts ont été exécutés avec succès !');
})();
