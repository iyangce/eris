/* Gets the number of milliseconds that have elapsed since the Unix epoch.
 *
 * ```javascript
 * now(); // -> 1468826678701
 * ```
 */

exports = Date.now || function ()
{
    return new Date().getTime();
};