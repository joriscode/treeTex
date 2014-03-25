/** @constructor */
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.constructor = ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2;
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.apply__Lscala_Tuple2__V = (function(x$2) {
  var x1 = x$2;
  matchEnd3: {
    if ((x1 !== null)) {
      var j = x1.$$und1$mcI$sp__I();
      var fol = ScalaJS.as.scala_collection_immutable_Set(x1.$$und2__O());
      fol.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, j$1) {
        return (function(k) {
          k = ScalaJS.uI(k);
          if ((arg$outer.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi().pos__I() === k)) {
            arg$outer.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi().finals$und$eq__Lscala_collection_immutable_Map__V(arg$outer.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi().finals__Lscala_collection_immutable_Map().updated__O__O__Lscala_collection_immutable_Map(ScalaJS.bI(j$1), ScalaJS.bI(arg$outer.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi().finalTag__I())))
          } else {
            arg$outer.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi().makeTransition__I__I__Lscala_util_regexp_WordExp$Label__V(j$1, k, ScalaJS.as.scala_util_regexp_WordExp$Label(arg$outer.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi().labelAt__Lscala_collection_immutable_Map().apply__O__O(ScalaJS.bI(k))))
          };
          return ScalaJS.bV(undefined)
        })
      })(this, j)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi = (function() {
  return this.$$outer$2
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.apply__O__O = (function(v1) {
  this.apply__Lscala_Tuple2__V(ScalaJS.as.scala_Tuple2(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.init___Lscala_util_automata_WordBerrySethi = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.scala$util$automata$WordBerrySethi$$anonfun$$$outer__ = (function() {
  return this.scala$util$automata$WordBerrySethi$$anonfun$$$outer__Lscala_util_automata_WordBerrySethi()
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.apply__Lscala_Tuple2__ = (function(x$2) {
  return ScalaJS.bV(this.apply__Lscala_Tuple2__V(x$2))
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype = ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype;
ScalaJS.is.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2)))
});
ScalaJS.as.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.WordBerrySethi$$anonfun$collectTransitions$2")
  }
});
ScalaJS.isArrayOf.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2)))
});
ScalaJS.asArrayOf.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.WordBerrySethi$$anonfun$collectTransitions$2;", depth)
  }
});
ScalaJS.data.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2 = new ScalaJS.ClassTypeData({
  scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2: 0
}, false, "scala.util.automata.WordBerrySethi$$anonfun$collectTransitions$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2.prototype.$classData = ScalaJS.data.scala_util_automata_WordBerrySethi$$anonfun$collectTransitions$2;
//@ sourceMappingURL=WordBerrySethi$$anonfun$collectTransitions$2.js.map
