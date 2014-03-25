/** @constructor */
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.indexMap$1$f = null;
  this.delta$1$2 = null;
  this.deftrans$1$2 = null;
  this.deltaR$1$2 = null;
  this.defaultR$1$2 = null
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype.constructor = ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2;
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype.apply__Lscala_collection_immutable_BitSet__V = (function(Q$3) {
  var q = ScalaJS.uI(ScalaJS.as.scala_collection_Map(this.indexMap$1$f.elem$1).apply__O__O(Q$3));
  var trans = ScalaJS.as.scala_collection_mutable_HashMap(this.delta$1$2.apply__O__O(Q$3));
  var transDef = ScalaJS.as.scala_collection_immutable_BitSet(ScalaJS.as.scala_collection_mutable_Map(this.deftrans$1$2.elem$1).apply__O__O(Q$3));
  var qDef = ScalaJS.uI(ScalaJS.as.scala_collection_Map(this.indexMap$1$f.elem$1).apply__O__O(transDef));
  var ntrans = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  trans.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$1 = true;
          break matchEnd3
        };
        var jsx$1 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$1)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, qDef$1, ntrans$1) {
    return (function(x$2) {
      var x1 = x$2;
      matchEnd3: {
        if ((x1 !== null)) {
          var label = x1.$$und1__O();
          var value = ScalaJS.as.scala_collection_immutable_BitSet(x1.$$und2__O());
          var p = ScalaJS.uI(ScalaJS.as.scala_collection_Map(arg$outer.indexMap$1$f.elem$1).apply__O__O(value));
          if ((p !== qDef$1)) {
            ntrans$1.update__O__O__V(label, ScalaJS.bI(p));
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd3
          } else {
            ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
            break matchEnd3
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })(this, qDef, ntrans)));
  this.deltaR$1$2.underlying[q] = ntrans;
  this.defaultR$1$2.underlying[q] = qDef
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype.apply__O__O = (function(v1) {
  this.apply__Lscala_collection_immutable_BitSet__V(ScalaJS.as.scala_collection_immutable_BitSet(v1));
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype.init___Lscala_util_automata_SubsetConstruction__Lscala_runtime_ObjectRef__Lscala_collection_mutable_HashMap__Lscala_runtime_ObjectRef__ALscala_collection_mutable_Map__AI = (function($$outer, indexMap$1, delta$1, deftrans$1, deltaR$1, defaultR$1) {
  this.indexMap$1$f = indexMap$1;
  this.delta$1$2 = delta$1;
  this.deftrans$1$2 = deftrans$1;
  this.deltaR$1$2 = deltaR$1;
  this.defaultR$1$2 = defaultR$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype.apply__Lscala_collection_immutable_BitSet__ = (function(Q) {
  return ScalaJS.bV(this.apply__Lscala_collection_immutable_BitSet__V(Q))
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype = ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype;
ScalaJS.is.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_SubsetConstruction$$anonfun$determinize$2)))
});
ScalaJS.as.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_SubsetConstruction$$anonfun$determinize$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.SubsetConstruction$$anonfun$determinize$2")
  }
});
ScalaJS.isArrayOf.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_SubsetConstruction$$anonfun$determinize$2)))
});
ScalaJS.asArrayOf.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_SubsetConstruction$$anonfun$determinize$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.SubsetConstruction$$anonfun$determinize$2;", depth)
  }
});
ScalaJS.data.scala_util_automata_SubsetConstruction$$anonfun$determinize$2 = new ScalaJS.ClassTypeData({
  scala_util_automata_SubsetConstruction$$anonfun$determinize$2: 0
}, false, "scala.util.automata.SubsetConstruction$$anonfun$determinize$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_util_automata_SubsetConstruction$$anonfun$determinize$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_SubsetConstruction$$anonfun$determinize$2.prototype.$classData = ScalaJS.data.scala_util_automata_SubsetConstruction$$anonfun$determinize$2;
//@ sourceMappingURL=SubsetConstruction$$anonfun$determinize$2.js.map
