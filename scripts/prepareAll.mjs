import { exec } from 'child_process';
import { promisify } from 'util';

const run = promisify(exec);

const scripts = [
  'node ./scripts/prepareExperiences.mjs',
  'node ./scripts/prepareProjects.mjs',
  'node ./scripts/prepareFormations.mjs',
  'node ./scripts/prepareImages.mjs',
];

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
