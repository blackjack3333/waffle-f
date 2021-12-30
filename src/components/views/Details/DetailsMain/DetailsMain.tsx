import React, { FC } from "react";
import { ITranscriptionResponse } from "src/models";
import styles from "./DetailsMain.module.css";

interface IDetailsMainProps {
  data?: ITranscriptionResponse["transcription"];
}

export const DetailsMain: FC<IDetailsMainProps> = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.mainTitle}>
        <span>
          Transcript in <span className={styles.wordDustyOrange}>English</span>
        </span>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.listWrapper}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.time}>0:00</div>
              <div className={styles.value}>
                {data?.text || (
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia quia debitis ab distinctio culpa modi magnam at
                    perspiciatis error praesentium autem reiciendis, voluptas
                    iste architecto fugit ex iusto quibusdam minus nobis tenetur
                    corporis. Asperiores eligendi illum accusamus, delectus
                    neque minima cumque totam, quod ea tenetur possimus autem.
                    Mollitia fuga quasi pariatur eaque libero est voluptas quae
                    eligendi soluta. Doloribus tenetur, cumque magnam eos est ex
                    esse! Maxime veniam sint atque quia! Vero dolore dolor
                    maiores, alias ut expedita eligendi laudantium, eum
                    blanditiis, quidem id excepturi dolores eos. Incidunt odit
                    doloremque fugit eaque, est ratione iste optio ea at animi
                    minima repudiandae doloribus, quae nobis. Quidem qui, ipsum
                    obcaecati odit nostrum odio nam ut possimus eius earum sit,
                    eligendi illum quod aut id, fugit dolore eum? Possimus eius
                    nisi pariatur. Eum aperiam voluptatibus rerum dolorum natus,
                    explicabo earum. Vitae magni minus veritatis optio dolorem
                    quo. Impedit veritatis consectetur commodi atque! Amet,
                    vero. Quidem, minima? Quaerat et eum consequatur id
                    recusandae maiores rem nulla. Et neque quam laboriosam,
                    ipsum vero veniam, itaque nisi esse illum repellendus
                    corporis, explicabo suscipit doloribus culpa natus
                    exercitationem hic provident molestiae. Sit, ducimus aliquid
                    maiores quos impedit fugit sapiente dicta ad beatae minus
                    quidem. Vel minus eius exercitationem laboriosam, quaerat
                    blanditiis sit nemo. Incidunt nesciunt, mollitia officia
                    porro perferendis excepturi consectetur ea beatae quis
                    quidem molestiae illum, ullam, aspernatur laborum saepe
                    provident obcaecati quas error velit quaerat necessitatibus
                    esse recusandae nulla alias. Quod maiores natus ad similique
                    earum voluptate quas molestiae nihil. Fuga illum tenetur
                    facilis praesentium harum est, nulla mollitia, animi enim
                    non similique temporibus pariatur beatae suscipit. Ipsum
                    saepe error voluptas facere numquam laborum assumenda
                    ratione mollitia. Ad temporibus fugiat possimus iusto
                    voluptates, totam similique voluptatem eligendi assumenda
                    aspernatur sunt facere consectetur atque beatae soluta in?
                    Vero voluptatem eaque cupiditate aliquid. Alias iste at
                    possimus. Cum maxime culpa perferendis, voluptatibus in
                    laborum ex cupiditate neque commodi consequatur provident
                    odit dolorum placeat libero dignissimos minus fugiat
                    obcaecati sint amet nostrum ad mollitia exercitationem.
                    Error nemo in earum illum excepturi cumque libero
                    perspiciatis praesentium non! Expedita ullam ipsa, quaerat
                    saepe libero repellat odio voluptatem sed quo in! Vero ullam
                    deserunt repudiandae beatae facilis quibusdam reprehenderit,
                    est dolores repellat, vel suscipit omnis eligendi. Molestiae
                    doloremque unde, quo accusamus, magni ipsum laudantium sed
                    eos quisquam impedit eum. Amet maiores accusamus doloremque
                    odio officia ut distinctio cumque vitae provident tempore
                    culpa, sunt quidem rerum eveniet iusto. Labore earum sunt
                    quaerat modi, molestias impedit saepe consequuntur quam
                    incidunt dolore? Quam magni eveniet velit consequatur
                    reiciendis iure animi ea, nihil autem minus quisquam tempore
                    assumenda, aut veniam libero ipsum voluptatibus itaque
                    maiores dolor error vero eum. Ut necessitatibus harum ipsum
                    voluptatum. Totam, voluptas deleniti harum aperiam dicta,
                    commodi voluptatem fuga consectetur corporis quae, esse ab
                    eveniet nihil? Quam odio recusandae neque corrupti
                    voluptatem, qui quos officia fugiat tempora quisquam dolorem
                    tempore itaque nam nemo inventore saepe porro eum cumque
                    similique. Possimus quo tempora et at! Fugit atque facilis
                    praesentium ad maxime quo ea doloremque iusto sunt, rem iste
                    adipisci neque minima suscipit! Inventore minima soluta
                    doloribus optio voluptate nihil placeat quasi dolor?
                    Adipisci ullam aliquid fugit culpa impedit ipsa quod aut
                    cupiditate, numquam perferendis non error ipsum corrupti
                    officiis eos incidunt eveniet obcaecati praesentium! Magni
                    cupiditate, placeat maxime, delectus eos ipsam possimus
                    quibusdam dolorum ad vitae nihil, aliquam in labore non
                    blanditiis fuga consectetur obcaecati doloribus minima.
                    Cupiditate, non expedita, tempora exercitationem dolore ea
                    rem dolores eum ratione aspernatur corrupti odit. Aperiam
                    dolorum deserunt quam natus quae cupiditate maiores
                    perspiciatis eligendi, accusantium obcaecati? Eaque,
                    maiores! Maiores voluptatum at neque! Inventore blanditiis
                    illo beatae necessitatibus, sapiente vitae quia fugiat.
                    Dicta, beatae voluptate doloremque fuga obcaecati facilis!
                    Maxime omnis consequuntur est tenetur perferendis amet
                    libero dolorem ab, eius sunt veniam cupiditate nobis
                    asperiores alias, similique, nisi officiis quam? Id nisi
                    illum sed reiciendis ipsum tempore repellat, iure voluptates
                    quibusdam qui odit accusantium dolorum quia suscipit
                    voluptatum distinctio omnis eum ut voluptate est non
                    molestias veritatis. Vero, nesciunt iure accusantium quae
                    fugiat iusto architecto, repellendus iste nam dicta magnam
                    quam deserunt repudiandae incidunt aperiam explicabo quis
                    tenetur minima ratione. Sequi amet magni ullam sed
                    distinctio explicabo maiores mollitia repellendus recusandae
                    quibusdam molestiae, iusto impedit eaque quia veniam
                    repudiandae a? Nobis, dolores. Inventore laborum saepe
                    molestiae quam illum sapiente! Adipisci blanditiis quia
                    libero. Accusamus, doloribus delectus aliquam non est veniam
                    repellat assumenda voluptatibus voluptatem temporibus magni
                    quasi praesentium fuga sit. Atque molestias neque saepe
                    dolores a rerum sed dicta similique, eos tenetur illo minus!
                    Ratione, sit? Facere ab corporis amet reiciendis quibusdam
                    delectus ut cumque optio fuga ratione assumenda temporibus,
                    ullam voluptatibus fugit culpa quas numquam, quisquam quod.
                    Laboriosam quis quia velit iure. Enim esse obcaecati quos
                    quae iure nam ipsa, voluptatem dolorum dolor atque voluptas
                    similique mollitia ipsum. Unde rerum sapiente nemo, aliquid
                    cum quam suscipit nostrum aut mollitia commodi delectus a
                    voluptatibus neque error ipsum eum autem alias aspernatur ad
                    iste tenetur non consectetur. Nisi consequatur saepe ullam
                    ab repudiandae quas non natus asperiores facere sapiente
                    quae explicabo facilis mollitia, illum, nemo quasi ex optio
                    possimus, reiciendis blanditiis! Iure ullam, quod voluptatum
                    eius enim alias officiis laborum maiores voluptates est,
                    nesciunt delectus sequi voluptatem excepturi nam corporis
                    itaque ea consectetur exercitationem error vero. Adipisci
                    dignissimos ipsum impedit et! Vel rem amet, ab cupiditate
                    quis optio culpa magni iste fugit hic eos maxime ipsam rerum
                    placeat accusamus quos esse modi perferendis blanditiis
                    ratione commodi eius, fugiat, odio consequuntur? Ullam
                    voluptatem odio incidunt fugit voluptas ducimus illum
                    corrupti sit quam et voluptate ratione nihil amet quibusdam
                    recusandae commodi voluptates molestias nobis ea, neque
                    optio aperiam reiciendis animi. Rerum fuga deleniti
                    voluptatibus eum soluta, nisi doloribus aut suscipit quidem
                    iure dignissimos delectus saepe, repellat reiciendis nobis
                    esse numquam quasi neque ratione adipisci praesentium alias
                    cum, unde dolore. Perferendis quibusdam cumque ipsa,
                    deserunt hic voluptatem quo est maiores maxime nesciunt eum
                    autem nihil aspernatur omnis voluptates consequuntur eaque
                    nisi amet ex, nulla tempora. Architecto non enim molestiae
                    quidem velit neque alias tenetur doloribus illum dicta
                    distinctio doloremque, veniam aspernatur inventore. Unde
                    saepe adipisci vitae aspernatur repudiandae facere neque.
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
