import { Utils } from '../utils/Utils';

export const ObfuscationTarget: Readonly<{
    Browser: 'browser';
    BrowserNoEval: 'browser-no-eval';
    Node: 'node';
    ServiceWorker: 'service-worker';
}> = Utils.makeEnum({
    Browser: 'browser',
    BrowserNoEval: 'browser-no-eval',
    Node: 'node',
    ServiceWorker: 'service-worker',
});
