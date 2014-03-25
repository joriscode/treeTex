/** @constructor */
ScalaJS.c.scala_collection_immutable_BitSet$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.empty$1 = null
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.constructor = ScalaJS.c.scala_collection_immutable_BitSet$;
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.apply__Lscala_collection_Seq__Lscala_collection_BitSet = (function(elems$3) {
  return ScalaJS.impls.scala_collection_generic_BitSetFactory$class__apply__Lscala_collection_generic_BitSetFactory__Lscala_collection_Seq__Lscala_collection_BitSet(this, elems$3)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.bitsetCanBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return ScalaJS.impls.scala_collection_generic_BitSetFactory$class__bitsetCanBuildFrom__Lscala_collection_generic_BitSetFactory__Lscala_collection_generic_CanBuildFrom(this)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.empty__Lscala_collection_immutable_BitSet = (function() {
  return this.empty$1
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_immutable_BitSet$$anon$1().init___()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.bitsetCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.fromArray__AJ__Lscala_collection_immutable_BitSet = (function(elems) {
  return this.fromBitMaskNoCopy__AJ__Lscala_collection_immutable_BitSet(elems)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.fromBitMask__AJ__Lscala_collection_immutable_BitSet = (function(elems) {
  var len = elems.underlying.length;
  if ((len === 0)) {
    return this.empty__Lscala_collection_immutable_BitSet()
  } else {
    if ((len === 1)) {
      return new ScalaJS.c.scala_collection_immutable_BitSet$BitSet1().init___J(elems.underlying[0])
    } else {
      if ((len === 2)) {
        return new ScalaJS.c.scala_collection_immutable_BitSet$BitSet2().init___J__J(elems.underlying[0], elems.underlying[1])
      } else {
        var a = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [len]);
        ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(elems, 0, a, 0, len);
        return new ScalaJS.c.scala_collection_immutable_BitSet$BitSetN().init___AJ(a)
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.fromBitMaskNoCopy__AJ__Lscala_collection_immutable_BitSet = (function(elems) {
  var len = elems.underlying.length;
  if ((len === 0)) {
    return this.empty__Lscala_collection_immutable_BitSet()
  } else {
    if ((len === 1)) {
      return new ScalaJS.c.scala_collection_immutable_BitSet$BitSet1().init___J(elems.underlying[0])
    } else {
      if ((len === 2)) {
        return new ScalaJS.c.scala_collection_immutable_BitSet$BitSet2().init___J__J(elems.underlying[0], elems.underlying[1])
      } else {
        return new ScalaJS.c.scala_collection_immutable_BitSet$BitSetN().init___AJ(elems)
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_BitSet()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.empty__Lscala_collection_BitSet = (function() {
  return this.empty__Lscala_collection_immutable_BitSet()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_BitSet = this;
  ScalaJS.impls.scala_collection_generic_BitSetFactory$class__$init$__Lscala_collection_generic_BitSetFactory__V(this);
  this.empty$1 = new ScalaJS.c.scala_collection_immutable_BitSet$BitSet1().init___J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0));
  return this
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.bitsetCanBuildFrom__ = (function() {
  return this.bitsetCanBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.apply__Lscala_collection_Seq__ = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_BitSet(elems)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.fromBitMaskNoCopy__AJ__ = (function(elems$2) {
  return this.fromBitMaskNoCopy__AJ__Lscala_collection_immutable_BitSet(elems$2)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.fromBitMask__AJ__ = (function(elems$3) {
  return this.fromBitMask__AJ__Lscala_collection_immutable_BitSet(elems$3)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.fromArray__AJ__ = (function(elems$4) {
  return this.fromArray__AJ__Lscala_collection_immutable_BitSet(elems$4)
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_immutable_BitSet()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_BitSet$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_BitSet$.prototype = ScalaJS.c.scala_collection_immutable_BitSet$.prototype;
ScalaJS.is.scala_collection_immutable_BitSet$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_BitSet$)))
});
ScalaJS.as.scala_collection_immutable_BitSet$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_BitSet$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.BitSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_BitSet$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_BitSet$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_BitSet$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_BitSet$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.BitSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_BitSet$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_BitSet$: 0
}, false, "scala.collection.immutable.BitSet$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_BitSet$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_BitSetFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_BitSet$.prototype.$classData = ScalaJS.data.scala_collection_immutable_BitSet$;
ScalaJS.moduleInstances.scala_collection_immutable_BitSet = undefined;
ScalaJS.modules.scala_collection_immutable_BitSet = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_BitSet)) {
    ScalaJS.moduleInstances.scala_collection_immutable_BitSet = new ScalaJS.c.scala_collection_immutable_BitSet$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_BitSet
});
//@ sourceMappingURL=BitSet$.js.map
