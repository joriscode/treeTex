/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.tag$1 = null;
  this.manifest$1 = null;
  this.elems$1 = null;
  this.capacity$1 = 0;
  this.size$1 = 0
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder;
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.manifest__Lscala_reflect_ClassTag = (function() {
  return this.manifest$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.elems__p1__Lscala_collection_mutable_WrappedArray = (function() {
  return this.elems$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.elems$und$eq__p1__Lscala_collection_mutable_WrappedArray__V = (function(x$1) {
  this.elems$1 = x$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.capacity__p1__I = (function() {
  return this.capacity$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.capacity$und$eq__p1__I__V = (function(x$1) {
  this.capacity$1 = x$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.size__p1__I = (function() {
  return this.size$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.size$und$eq__p1__I__V = (function(x$1) {
  this.size$1 = x$1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.mkArray__p1__I__Lscala_collection_mutable_WrappedArray = (function(size) {
  var runtimeClass = ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(this.tag$1);
  var x1 = runtimeClass;
  matchEnd12: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Byte().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofByte().init___AB(ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Short().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofShort().init___AS(ScalaJS.newArrayObject(ScalaJS.data.scala_Short.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Character().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofChar().init___AC(ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Integer().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofInt().init___AI(ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Long().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofLong().init___AJ(ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Float().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofFloat().init___AF(ScalaJS.newArrayObject(ScalaJS.data.scala_Float.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Double().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofDouble().init___AD(ScalaJS.newArrayObject(ScalaJS.data.scala_Double.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Boolean().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofBoolean().init___AZ(ScalaJS.newArrayObject(ScalaJS.data.scala_Boolean.getArrayOf(), [size]));
      break matchEnd12
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_Void().TYPE__Ljava_lang_Class(), x1)) {
      var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofUnit().init___ALscala_runtime_BoxedUnit(ScalaJS.newArrayObject(ScalaJS.data.scala_runtime_BoxedUnit.getArrayOf(), [size]));
      break matchEnd12
    };
    var newelems = new ScalaJS.c.scala_collection_mutable_WrappedArray$ofRef().init___AO(ScalaJS.asArrayOf.java_lang_Object(this.tag$1.newArray__I__O(size), 1));
    break matchEnd12
  };
  if ((this.size__p1__I() > 0)) {
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__p1__Lscala_collection_mutable_WrappedArray().array__O(), 0, newelems.array__O(), 0, this.size__p1__I())
  };
  return newelems
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.resize__p1__I__V = (function(size) {
  this.elems$und$eq__p1__Lscala_collection_mutable_WrappedArray__V(this.mkArray__p1__I__Lscala_collection_mutable_WrappedArray(size));
  this.capacity$und$eq__p1__I__V(size)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHint__I__V = (function(size) {
  if ((this.capacity__p1__I() < size)) {
    this.resize__p1__I__V(size)
  }
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.ensureSize__p1__I__V = (function(size) {
  if ((this.capacity__p1__I() < size)) {
    if ((this.capacity__p1__I() === 0)) {
      var newsize = 16
    } else {
      var newsize = (this.capacity__p1__I() * 2)
    };
    while ((newsize < size)) {
      newsize = (newsize * 2)
    };
    this.resize__p1__I__V(newsize)
  }
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_WrappedArrayBuilder = (function(elem) {
  this.ensureSize__p1__I__V((this.size__p1__I() + 1));
  this.elems__p1__Lscala_collection_mutable_WrappedArray().update__I__O__V(this.size__p1__I(), elem);
  this.size$und$eq__p1__I__V((this.size__p1__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.clear__V = (function() {
  this.size$und$eq__p1__I__V(0)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.result__Lscala_collection_mutable_WrappedArray = (function() {
  if (((this.capacity__p1__I() !== 0) && (this.capacity__p1__I() === this.size__p1__I()))) {
    return this.elems__p1__Lscala_collection_mutable_WrappedArray()
  } else {
    return this.mkArray__p1__I__Lscala_collection_mutable_WrappedArray(this.size__p1__I())
  }
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_WrappedArrayBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_WrappedArrayBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.init___Lscala_reflect_ClassTag = (function(tag) {
  this.tag$1 = tag;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.manifest$1 = tag;
  this.capacity$1 = 0;
  this.size$1 = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_WrappedArrayBuilder(elem)
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.manifest__ = (function() {
  return this.manifest__Lscala_reflect_ClassTag()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArrayBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArrayBuilder.prototype = ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArrayBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArrayBuilder)))
});
ScalaJS.as.scala_collection_mutable_WrappedArrayBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArrayBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArrayBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArrayBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArrayBuilder)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArrayBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArrayBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArrayBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArrayBuilder = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArrayBuilder: 0
}, false, "scala.collection.mutable.WrappedArrayBuilder", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_WrappedArrayBuilder: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArrayBuilder;
//@ sourceMappingURL=WrappedArrayBuilder.js.map
