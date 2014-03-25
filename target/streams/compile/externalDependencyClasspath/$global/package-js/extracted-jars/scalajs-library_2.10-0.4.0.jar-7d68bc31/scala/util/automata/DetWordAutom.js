/** @constructor */
ScalaJS.c.scala_util_automata_DetWordAutom = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.constructor = ScalaJS.c.scala_util_automata_DetWordAutom;
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.isFinal__I__Z = (function(q) {
  return (this.finals__AI().underlying[q] !== 0)
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.isSink__I__Z = (function(q) {
  return (this.delta__ALscala_collection_mutable_Map().underlying[q].isEmpty__Z() && (this.$default__AI().underlying[q] === q))
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.next__I__O__I = (function(q, label) {
  return ScalaJS.uI(this.delta__ALscala_collection_mutable_Map().underlying[q].getOrElse__O__Lscala_Function0__O(label, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, q$1) {
    return (function() {
      return ScalaJS.bI(arg$outer.$default__AI().underlying[q$1])
    })
  })(this, q))))
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.toString__T = (function() {
  var sb = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___T("[DetWordAutom  nstates=");
  sb.append__I__Lscala_collection_mutable_StringBuilder(this.nstates__I());
  sb.append__T__Lscala_collection_mutable_StringBuilder(" finals=");
  var map = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.finals__AI()).zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_Tuple2.getClassOf()))), 1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return x$1.swap$mcII$sp__Lscala_Tuple2()
    })
  })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.scala_Tuple2.getClassOf()))), 1))));
  sb.append__T__Lscala_collection_mutable_StringBuilder(map.toString__T());
  sb.append__T__Lscala_collection_mutable_StringBuilder(" delta=\n");
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.nstates__I()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, sb$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      sb$1.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%d->%s\n")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(i), arg$outer.delta__ALscala_collection_mutable_Map().underlying[i]]))));
      if ((i < arg$outer.$default__AI().underlying.length)) {
        return sb$1.append__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("_>%s\n")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(arg$outer.$default__AI().underlying[i])]))))
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this, sb)));
  return sb.toString__T()
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.next__I__O__ = (function(q, label) {
  return ScalaJS.bI(this.next__I__O__I(q, label))
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.isSink__I__ = (function(q$2) {
  return ScalaJS.bZ(this.isSink__I__Z(q$2))
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.isFinal__I__ = (function(q$3) {
  return ScalaJS.bZ(this.isFinal__I__Z(q$3))
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.$default__ = (function() {
  return this.$default__AI()
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.delta__ = (function() {
  return this.delta__ALscala_collection_mutable_Map()
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.finals__ = (function() {
  return this.finals__AI()
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.nstates__ = (function() {
  return ScalaJS.bI(this.nstates__I())
});
/** @constructor */
ScalaJS.inheritable.scala_util_automata_DetWordAutom = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_automata_DetWordAutom.prototype = ScalaJS.c.scala_util_automata_DetWordAutom.prototype;
ScalaJS.is.scala_util_automata_DetWordAutom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_automata_DetWordAutom)))
});
ScalaJS.as.scala_util_automata_DetWordAutom = (function(obj) {
  if ((ScalaJS.is.scala_util_automata_DetWordAutom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.automata.DetWordAutom")
  }
});
ScalaJS.isArrayOf.scala_util_automata_DetWordAutom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_automata_DetWordAutom)))
});
ScalaJS.asArrayOf.scala_util_automata_DetWordAutom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_automata_DetWordAutom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.automata.DetWordAutom;", depth)
  }
});
ScalaJS.data.scala_util_automata_DetWordAutom = new ScalaJS.ClassTypeData({
  scala_util_automata_DetWordAutom: 0
}, false, "scala.util.automata.DetWordAutom", ScalaJS.data.java_lang_Object, {
  scala_util_automata_DetWordAutom: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_automata_DetWordAutom.prototype.$classData = ScalaJS.data.scala_util_automata_DetWordAutom;
//@ sourceMappingURL=DetWordAutom.js.map
