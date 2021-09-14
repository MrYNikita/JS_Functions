console.clear();

let func = function jections_finder (
  c0_arguments
) {
  let result = undefined;
  let jection_path_catalog = undefined;

  if (!!!c0_arguments.ject_over) {
    c0_arguments.ject_over = p0_s1_f2_l3_4_focusable;
  }

  if (!(c0_arguments.ject_path instanceof Array)) {
    if (typeof(c0_arguments.ject_path) === "string") {
      if (
        c0_arguments.ject_path.indexOf("|") !== -1 ||
        c0_arguments.ject_path.indexOf("&") !== -1
      ) {
        result = [];
        jection_path_catalog = c0_arguments.ject_path.split(" |");
        return jection_path_catalog;
      } else { c0_arguments.ject_path = c0_arguments.ject_path.split(" "); }
    }
  }

  let count = 0;
  let iteration_end = false;
  let iteration_limit = false;
  let iteration_continue = false;
  let jection_selected = [c0_arguments.ject_over];
  let jection_selected_end = [];
  let jection_path_length = c0_arguments.ject_path.length;
  let jection_selected_length = jection_selected.length;
  let iteration_searched_num = 0;

  for (let count1 = 0; count1 < jection_path_length; count1++) {

    let jection_searched = c0_arguments.ject_path[count1];

    switch (jection_searched) {
      default : {
        if (Object.prototype.toString.call(jection_searched) === "[object String]") {

        }
      } break;
      case ".": {
        iteration_searched_num = 1;
        if (iteration_limit) { iteration_limit = false; }
      } break;
      case "*": {
        count1++;
        if (!iteration_limit) { iteration_limit = true; }
        jection_searched = c0_arguments.ject_path[count1];
      } break;
      case "]": {
        count1++;
        iteration_end = true;
        if (!iteration_limit) { iteration_limit = true; }
        jection_searched = c0_arguments.ject_path[count1];
      } break;
    }

    do {
      iteration_continue = false;
      for (let count2 = 0; count2 < jection_selected_length; count2++) {
        let claster_over = jection_selected.splice(0,1)[0];
        for (let claster in claster_over) {
          if (
            !iteration_end           &&
            jection_searched !== "]" &&
            jection_searched !== "*" &&
            jection_searched !== "." &&
            claster.indexOf(jection_searched) !== -1
          ) {
            if (count1 !== jection_path_length - 1) {
              jection_selected = [claster_over[claster]];
              iteration_continue = true;
              break;
            } else {
              return claster_over[claster];
            }
          }
          if (
            typeof(claster_over[claster]) === "object"
          ) {
            if (
              iteration_end && Object.keys(claster_over[claster]).length > 0
            ) {
              let search_ject = false;
              let claster_keys = Object.keys(claster_over[claster]);
              for (let count3 = 0; count3 < claster_keys.length; count3++) {
                if (typeof(claster_over[claster][claster_keys[count3]]) === "object") {
                  search_ject = true;
                  jection_selected.push(claster_over[claster]);
                  break;
                }
              }
              if (!search_ject) { jection_selected_end.push(claster_over[claster]); }
            } else if (!iteration_end) { jection_selected.push(claster_over[claster]); }
          }
        }
        if (iteration_continue) { break; }
      }

      if (iteration_continue) { break; }
      if (iteration_searched_num > 0) { iteration_searched_num--; }
      if (
        iteration_limit               &&
        jection_selected.length === 0 &&
        jection_selected_end.length > 0
      ) {
        iteration_end = false;
        iteration_limit = false;
        jection_selected = jection_selected_end;
        jection_selected_end = undefined;
        iteration_searched_num++;
      }

      jection_selected_length = jection_selected.length;

    } while (
      jection_selected.length > 0 &&
      (iteration_limit || iteration_searched_num !== 0)
    );
  }
  return "none";
};

let test_ject = jections_finder ({
  ject_path: "* val751",
  ject_over: {
    val1: 1,
    val2: "stroke",
    val3: true,
    val4: [0,"stroke",false],
    val5: false,
    val6: true,
    val7: {
      val751: "WW",
    },
  },
});
