ScalaJS.impls.scala_util_automata_Inclusion$class__inclusion__Lscala_util_automata_Inclusion__Lscala_util_automata_DetWordAutom__Lscala_util_automata_DetWordAutom__Z = (function($$this, dfa1, dfa2) {
  var q1 = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var q2 = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var max = (1 + (dfa1.nstates__I() * dfa2.nstates__I()));
  var mark = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [max]);
  var result = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  var current = ScalaJS.impls.scala_util_automata_Inclusion$class__encode$1__Lscala_util_automata_Inclusion__I__I__Lscala_util_automata_DetWordAutom__I($$this, q1.elem$1, q2.elem$1, dfa1);
  var last = new ScalaJS.c.scala_runtime_IntRef().init___I(current);
  mark.underlying[last.elem$1] = max;
  while (((current !== 0) && result.elem$1)) {
    $$this.labels__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, q1$1, q2$1, max$1, mark$1, result$1, last$1, dfa1$1, dfa2$1) {
      return (function(letter) {
        var r1 = dfa1$1.next__I__O__I(q1$1.elem$1, letter);
        var r2 = dfa2$1.next__I__O__I(q2$1.elem$1, letter);
        if ((dfa1$1.isFinal__I__Z(r1) && (!dfa2$1.isFinal__I__Z(r2)))) {
          result$1.elem$1 = false
        };
        var test = ScalaJS.impls.scala_util_automata_Inclusion$class__encode$1__Lscala_util_automata_Inclusion__I__I__Lscala_util_automata_DetWordAutom__I(arg$outer, r1, r2, dfa1$1);
        if ((mark$1.underlying[test] === 0)) {
          mark$1.underlying[last$1.elem$1] = test;
          mark$1.underlying[test] = max$1;
          last$1.elem$1 = test
        };
        return ScalaJS.bV(undefined)
      })
    })($$this, q1, q2, max, mark, result, last, dfa1, dfa2)));
    var ncurrent = mark.underlying[current];
    if ((ncurrent !== max)) {
      q1.elem$1 = ScalaJS.impls.scala_util_automata_Inclusion$class__decode1$1__Lscala_util_automata_Inclusion__I__Lscala_util_automata_DetWordAutom__I($$this, ncurrent, dfa1);
      q2.elem$1 = ScalaJS.impls.scala_util_automata_Inclusion$class__decode2$1__Lscala_util_automata_Inclusion__I__Lscala_util_automata_DetWordAutom__I($$this, ncurrent, dfa1);
      current = ncurrent
    } else {
      current = 0
    }
  };
  return result.elem$1
});
ScalaJS.impls.scala_util_automata_Inclusion$class__encode$1__Lscala_util_automata_Inclusion__I__I__Lscala_util_automata_DetWordAutom__I = (function($$this, q1, q2, dfa1$1) {
  return ((1 + q1) + (q2 * dfa1$1.nstates__I()))
});
ScalaJS.impls.scala_util_automata_Inclusion$class__decode2$1__Lscala_util_automata_Inclusion__I__Lscala_util_automata_DetWordAutom__I = (function($$this, c, dfa1$1) {
  return (((c - 1) / dfa1$1.nstates__I()) | 0)
});
ScalaJS.impls.scala_util_automata_Inclusion$class__decode1$1__Lscala_util_automata_Inclusion__I__Lscala_util_automata_DetWordAutom__I = (function($$this, c, dfa1$1) {
  return ((c - 1) % dfa1$1.nstates__I())
});
ScalaJS.impls.scala_util_automata_Inclusion$class__$init$__Lscala_util_automata_Inclusion__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Inclusion$class.js.map
