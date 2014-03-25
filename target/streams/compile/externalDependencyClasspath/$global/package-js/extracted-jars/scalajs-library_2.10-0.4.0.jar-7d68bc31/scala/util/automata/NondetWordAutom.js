/** @constructor */
ScalaJS.c.scala_util_automata_NondetWordAutom = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.constructor = ScalaJS.c.scala_util_automata_NondetWordAutom;
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.isFinal__I__Z = (function(state) {
  return (this.finals__AI().underlying[state] > 0)
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.finalTag__I__I = (function(state) {
  return this.finals__AI().underlying[state]
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.containsFinal__Lscala_collection_immutable_BitSet__Z = (function(Q) {
  return Q.exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(state) {
      state = ScalaJS.uI(state);
      return ScalaJS.bZ(arg$outer.isFinal__I__Z(state))
    })
  })(this)))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.isEmpty__Z = (function() {
  return ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.nstates__I()).forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      x = ScalaJS.uI(x);
      return ScalaJS.bZ((!arg$outer.isFinal__I__Z(x)))
    })
  })(this)))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.next__I__O__Lscala_collection_immutable_BitSet = (function(q, a) {
  return ScalaJS.as.scala_collection_immutable_BitSet(this.delta__ALscala_collection_mutable_Map().underlying[q].getOrElse__O__Lscala_Function0__O(a, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, q$1) {
    return (function() {
      return arg$outer.$default__ALscala_collection_immutable_BitSet().underlying[q$1]
    })
  })(this, q))))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.next__Lscala_collection_immutable_BitSet__O__Lscala_collection_immutable_BitSet = (function(Q, a) {
  return this.next__p1__Lscala_collection_immutable_BitSet__Lscala_Function1__Lscala_collection_immutable_BitSet(Q, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, a$1) {
    return (function(x$1) {
      x$1 = ScalaJS.uI(x$1);
      return arg$outer.next__I__O__Lscala_collection_immutable_BitSet(x$1, a$1)
    })
  })(this, a)))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.nextDefault__Lscala_collection_immutable_BitSet__Lscala_collection_immutable_BitSet = (function(Q) {
  return this.next__p1__Lscala_collection_immutable_BitSet__Lscala_Function1__Lscala_collection_immutable_BitSet(Q, ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(this.$default__ALscala_collection_immutable_BitSet(), 1)))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.next__p1__Lscala_collection_immutable_BitSet__Lscala_Function1__Lscala_collection_immutable_BitSet = (function(Q, f) {
  return ScalaJS.as.scala_collection_immutable_BitSet(ScalaJS.as.scala_collection_TraversableOnce(Q.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f, ScalaJS.modules.scala_collection_immutable_Set().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).foldLeft__O__Lscala_Function2__O(ScalaJS.modules.scala_collection_immutable_BitSet().empty__Lscala_collection_immutable_BitSet(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return ScalaJS.as.scala_collection_immutable_BitSet(x$2.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(x$3))
    })
  })())))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.finalStates__p1__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.as.scala_collection_immutable_IndexedSeq(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.nstates__I()).filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(state) {
      state = ScalaJS.uI(state);
      return ScalaJS.bZ(arg$outer.isFinal__I__Z(state))
    })
  })(this))))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.toString__T = (function() {
  var finalString = ScalaJS.as.scala_collection_MapLike(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.as.scala_collection_Seq(this.finalStates__p1__Lscala_collection_immutable_IndexedSeq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(j) {
      j = ScalaJS.uI(j);
      return ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.bI(j)), ScalaJS.bI(arg$outer.finals__AI().underlying[j]))
    })
  })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())))).toString__T();
  var deltaString = ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.nstates__I()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(i) {
      i = ScalaJS.uI(i);
      return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("   %d->%s\n    _>%s\n")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(i), arg$outer.delta__ALscala_collection_mutable_Map().underlying[i], arg$outer.$default__ALscala_collection_immutable_BitSet().underlying[i]])))
    })
  })(this)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T();
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[NondetWordAutom  nstates=%d  finals=%s  delta=\n%s")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(this.nstates__I()), finalString, deltaString])))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.nextDefault__Lscala_collection_immutable_BitSet__ = (function(Q) {
  return this.nextDefault__Lscala_collection_immutable_BitSet__Lscala_collection_immutable_BitSet(Q)
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.next__Lscala_collection_immutable_BitSet__O__ = (function(Q$2, a) {
  return this.next__Lscala_collection_immutable_BitSet__O__Lscala_collection_immutable_BitSet(Q$2, a)
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.next__I__O__ = (function(q, a$2) {
  return this.next__I__O__Lscala_collection_immutable_BitSet(q, a$2)
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.containsFinal__Lscala_collection_immutable_BitSet__ = (function(Q$3) {
  return ScalaJS.bZ(this.containsFinal__Lscala_collection_immutable_BitSet__Z(Q$3))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.finalTag__I__ = (function(state) {
  return ScalaJS.bI(this.finalTag__I__I(state))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.isFinal__I__ = (function(state$2) {
  return ScalaJS.bZ(this.isFinal__I__Z(state$2))
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.$default__ = (function() {
  return this.$default__ALscala_collection_immutable_BitSet()
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.delta__ = (function() {
  return this.delta__ALscala_collection_mutable_Map()
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.finals__ = (function() {
  return this.finals__AI()
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.labels__ = (function() {
  return this.labels__Lscala_collection_Seq()
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.nstates__ = (function() {
  return ScalaJS.bI(this.nstates__I())
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_NondetWordAutom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_NondetWordAutom.prototype = ScalaJS.c.scala_util_automata_NondetWordAutom.prototype;
ScalaJS.is.scala_util_automata_NondetWordAutom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_NondetWordAutom)))
});
ScalaJS.as.scala_util_automata_NondetWordAutom = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_NondetWordAutom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.NondetWordAutom")
  }
});
ScalaJS.isArrayOf.scala_util_automata_NondetWordAutom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_NondetWordAutom)))
});
ScalaJS.asArrayOf.scala_util_automata_NondetWordAutom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_NondetWordAutom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.NondetWordAutom;", depth)
  }
});
ScalaJS.data.scala_util_automata_NondetWordAutom = new ScalaJS.ClassTypeData({
  scala_util_automata_NondetWordAutom: 0
}, false, "scala.util.automata.NondetWordAutom", ScalaJS.data.java_lang_Object, {
  scala_util_automata_NondetWordAutom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_NondetWordAutom.prototype.$classData = ScalaJS.data.scala_util_automata_NondetWordAutom;
//@ sourceMappingURL=NondetWordAutom.js.map
