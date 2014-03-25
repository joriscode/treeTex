/** @constructor */
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.constructor = ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$;
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.invert$extension__Lscala_Tuple3__Lscala_Predef$$less$colon$less__Lscala_Predef$$less$colon$less__Lscala_Predef$$less$colon$less__Lscala_collection_generic_CanBuildFrom__O = (function($$this, w1$3, w2$3, w3$3, bf$2) {
  var buf = bf$2.apply__O__Lscala_collection_mutable_Builder(w1$3.apply__O__O($$this.$$und1__O()));
  var it1 = ScalaJS.as.scala_collection_GenTraversableOnce(w1$3.apply__O__O($$this.$$und1__O())).toIterator__Lscala_collection_Iterator();
  var it2 = ScalaJS.as.scala_collection_GenTraversableOnce(w2$3.apply__O__O($$this.$$und2__O())).toIterator__Lscala_collection_Iterator();
  var it3 = ScalaJS.as.scala_collection_GenTraversableOnce(w3$3.apply__O__O($$this.$$und3__O())).toIterator__Lscala_collection_Iterator();
  while (((it1.hasNext__Z() && it2.hasNext__Z()) && it3.hasNext__Z())) {
    buf.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple3().init___O__O__O(it1.next__O(), it2.next__O(), it3.next__O()))
  };
  return buf.result__O()
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.zipped$extension__Lscala_Tuple3__Lscala_Function1__Lscala_Function1__Lscala_Function1__Lscala_Tuple3 = (function($$this, w1, w2, w3) {
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(w1.apply__O__O($$this.$$und1__O()), w2.apply__O__O($$this.$$und2__O()), w3.apply__O__O($$this.$$und3__O()))
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.hashCode$extension__Lscala_Tuple3__I = (function($$this) {
  return $$this.hashCode__I()
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.equals$extension__Lscala_Tuple3__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_Tuple3Zipped$Ops(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var Ops$1 = null
    } else {
      var Ops$1 = ScalaJS.as.scala_runtime_Tuple3Zipped$Ops(x$1).x__Lscala_Tuple3()
    };
    return ScalaJS.anyRefEqEq($$this, Ops$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.equals$extension__Lscala_Tuple3__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__Lscala_Tuple3__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.hashCode$extension__Lscala_Tuple3__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__Lscala_Tuple3__I($$this$2))
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.zipped$extension__Lscala_Tuple3__Lscala_Function1__Lscala_Function1__Lscala_Function1__ = (function($$this$3, w1, w2, w3) {
  return new ScalaJS.c.scala_runtime_Tuple3Zipped().init___Lscala_Tuple3(this.zipped$extension__Lscala_Tuple3__Lscala_Function1__Lscala_Function1__Lscala_Function1__Lscala_Tuple3($$this$3, w1, w2, w3))
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.invert$extension__Lscala_Tuple3__Lscala_Predef$$less$colon$less__Lscala_Predef$$less$colon$less__Lscala_Predef$$less$colon$less__Lscala_collection_generic_CanBuildFrom__ = (function($$this$4, w1$2, w2$2, w3$2, bf) {
  return this.invert$extension__Lscala_Tuple3__Lscala_Predef$$less$colon$less__Lscala_Predef$$less$colon$less__Lscala_Predef$$less$colon$less__Lscala_collection_generic_CanBuildFrom__O($$this$4, w1$2, w2$2, w3$2, bf)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_Tuple3Zipped$Ops$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Tuple3Zipped$Ops$.prototype = ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype;
ScalaJS.is.scala_runtime_Tuple3Zipped$Ops$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Tuple3Zipped$Ops$)))
});
ScalaJS.as.scala_runtime_Tuple3Zipped$Ops$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Tuple3Zipped$Ops$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Tuple3Zipped$Ops")
  }
});
ScalaJS.isArrayOf.scala_runtime_Tuple3Zipped$Ops$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Tuple3Zipped$Ops$)))
});
ScalaJS.asArrayOf.scala_runtime_Tuple3Zipped$Ops$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Tuple3Zipped$Ops$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Tuple3Zipped$Ops;", depth)
  }
});
ScalaJS.data.scala_runtime_Tuple3Zipped$Ops$ = new ScalaJS.ClassTypeData({
  scala_runtime_Tuple3Zipped$Ops$: 0
}, false, "scala.runtime.Tuple3Zipped$Ops$", ScalaJS.data.java_lang_Object, {
  scala_runtime_Tuple3Zipped$Ops$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$.prototype.$classData = ScalaJS.data.scala_runtime_Tuple3Zipped$Ops$;
ScalaJS.moduleInstances.scala_runtime_Tuple3Zipped$Ops = undefined;
ScalaJS.modules.scala_runtime_Tuple3Zipped$Ops = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_Tuple3Zipped$Ops)) {
    ScalaJS.moduleInstances.scala_runtime_Tuple3Zipped$Ops = new ScalaJS.c.scala_runtime_Tuple3Zipped$Ops$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_Tuple3Zipped$Ops
});
//@ sourceMappingURL=Tuple3Zipped$Ops$.js.map
