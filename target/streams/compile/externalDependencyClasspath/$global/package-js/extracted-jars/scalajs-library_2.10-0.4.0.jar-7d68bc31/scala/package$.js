/** @constructor */
ScalaJS.c.scala_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.AnyRef$1 = null;
  this.Traversable$1 = null;
  this.Iterable$1 = null;
  this.Seq$1 = null;
  this.IndexedSeq$1 = null;
  this.Iterator$1 = null;
  this.List$1 = null;
  this.Nil$1 = null;
  this.$$colon$colon$1 = null;
  this.$$plus$colon$1 = null;
  this.$$colon$plus$1 = null;
  this.Stream$1 = null;
  this.$$hash$colon$colon$1 = null;
  this.Vector$1 = null;
  this.StringBuilder$1 = null;
  this.Range$1 = null;
  this.BigDecimal$1 = null;
  this.BigInt$1 = null;
  this.Equiv$1 = null;
  this.Numeric$1 = null;
  this.Ordered$1 = null;
  this.Ordering$1 = null;
  this.Either$1 = null;
  this.Left$1 = null;
  this.Right$1 = null;
  this.bitmap$0$1 = 0
});
ScalaJS.c.scala_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_package$.prototype.constructor = ScalaJS.c.scala_package$;
ScalaJS.c.scala_package$.prototype.BigDecimal$lzycompute__p1__Lscala_math_BigDecimal$ = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    this.BigDecimal$1 = ScalaJS.modules.scala_math_BigDecimal();
    this.bitmap$0$1 = (this.bitmap$0$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.BigDecimal$1
});
ScalaJS.c.scala_package$.prototype.BigInt$lzycompute__p1__Lscala_math_BigInt$ = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    this.BigInt$1 = ScalaJS.modules.scala_math_BigInt();
    this.bitmap$0$1 = (this.bitmap$0$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.BigInt$1
});
ScalaJS.c.scala_package$.prototype.AnyRef__Lscala_Specializable = (function() {
  return this.AnyRef$1
});
ScalaJS.c.scala_package$.prototype.Traversable__Lscala_collection_Traversable$ = (function() {
  return this.Traversable$1
});
ScalaJS.c.scala_package$.prototype.Iterable__Lscala_collection_Iterable$ = (function() {
  return this.Iterable$1
});
ScalaJS.c.scala_package$.prototype.Seq__Lscala_collection_Seq$ = (function() {
  return this.Seq$1
});
ScalaJS.c.scala_package$.prototype.IndexedSeq__Lscala_collection_IndexedSeq$ = (function() {
  return this.IndexedSeq$1
});
ScalaJS.c.scala_package$.prototype.Iterator__Lscala_collection_Iterator$ = (function() {
  return this.Iterator$1
});
ScalaJS.c.scala_package$.prototype.List__Lscala_collection_immutable_List$ = (function() {
  return this.List$1
});
ScalaJS.c.scala_package$.prototype.Nil__Lscala_collection_immutable_Nil$ = (function() {
  return this.Nil$1
});
ScalaJS.c.scala_package$.prototype.$$colon$colon__Lscala_collection_immutable_$colon$colon$ = (function() {
  return this.$$colon$colon$1
});
ScalaJS.c.scala_package$.prototype.$$plus$colon__Lscala_collection_$plus$colon$ = (function() {
  return this.$$plus$colon$1
});
ScalaJS.c.scala_package$.prototype.$$colon$plus__Lscala_collection_$colon$plus$ = (function() {
  return this.$$colon$plus$1
});
ScalaJS.c.scala_package$.prototype.Stream__Lscala_collection_immutable_Stream$ = (function() {
  return this.Stream$1
});
ScalaJS.c.scala_package$.prototype.$$hash$colon$colon__Lscala_collection_immutable_Stream$$hash$colon$colon$ = (function() {
  return this.$$hash$colon$colon$1
});
ScalaJS.c.scala_package$.prototype.Vector__Lscala_collection_immutable_Vector$ = (function() {
  return this.Vector$1
});
ScalaJS.c.scala_package$.prototype.StringBuilder__Lscala_collection_mutable_StringBuilder$ = (function() {
  return this.StringBuilder$1
});
ScalaJS.c.scala_package$.prototype.Range__Lscala_collection_immutable_Range$ = (function() {
  return this.Range$1
});
ScalaJS.c.scala_package$.prototype.BigDecimal__Lscala_math_BigDecimal$ = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    return this.BigDecimal$lzycompute__p1__Lscala_math_BigDecimal$()
  } else {
    return this.BigDecimal$1
  }
});
ScalaJS.c.scala_package$.prototype.BigInt__Lscala_math_BigInt$ = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    return this.BigInt$lzycompute__p1__Lscala_math_BigInt$()
  } else {
    return this.BigInt$1
  }
});
ScalaJS.c.scala_package$.prototype.Equiv__Lscala_math_Equiv$ = (function() {
  return this.Equiv$1
});
ScalaJS.c.scala_package$.prototype.Numeric__Lscala_math_Numeric$ = (function() {
  return this.Numeric$1
});
ScalaJS.c.scala_package$.prototype.Ordered__Lscala_math_Ordered$ = (function() {
  return this.Ordered$1
});
ScalaJS.c.scala_package$.prototype.Ordering__Lscala_math_Ordering$ = (function() {
  return this.Ordering$1
});
ScalaJS.c.scala_package$.prototype.Either__Lscala_util_Either$ = (function() {
  return this.Either$1
});
ScalaJS.c.scala_package$.prototype.Left__Lscala_util_Left$ = (function() {
  return this.Left$1
});
ScalaJS.c.scala_package$.prototype.Right__Lscala_util_Right$ = (function() {
  return this.Right$1
});
ScalaJS.c.scala_package$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_package = this;
  this.AnyRef$1 = new ScalaJS.c.scala_package$$anon$1().init___();
  this.Traversable$1 = ScalaJS.modules.scala_collection_Traversable();
  this.Iterable$1 = ScalaJS.modules.scala_collection_Iterable();
  this.Seq$1 = ScalaJS.modules.scala_collection_Seq();
  this.IndexedSeq$1 = ScalaJS.modules.scala_collection_IndexedSeq();
  this.Iterator$1 = ScalaJS.modules.scala_collection_Iterator();
  this.List$1 = ScalaJS.modules.scala_collection_immutable_List();
  this.Nil$1 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.$$colon$colon$1 = ScalaJS.modules.scala_collection_immutable_$colon$colon();
  this.$$plus$colon$1 = ScalaJS.modules.scala_collection_$plus$colon();
  this.$$colon$plus$1 = ScalaJS.modules.scala_collection_$colon$plus();
  this.Stream$1 = ScalaJS.modules.scala_collection_immutable_Stream();
  this.$$hash$colon$colon$1 = ScalaJS.modules.scala_collection_immutable_Stream$$hash$colon$colon();
  this.Vector$1 = ScalaJS.modules.scala_collection_immutable_Vector();
  this.StringBuilder$1 = ScalaJS.modules.scala_collection_mutable_StringBuilder();
  this.Range$1 = ScalaJS.modules.scala_collection_immutable_Range();
  this.Equiv$1 = ScalaJS.modules.scala_math_Equiv();
  this.Numeric$1 = ScalaJS.modules.scala_math_Numeric();
  this.Ordered$1 = ScalaJS.modules.scala_math_Ordered();
  this.Ordering$1 = ScalaJS.modules.scala_math_Ordering();
  this.Either$1 = ScalaJS.modules.scala_util_Either();
  this.Left$1 = ScalaJS.modules.scala_util_Left();
  this.Right$1 = ScalaJS.modules.scala_util_Right();
  return this
});
ScalaJS.c.scala_package$.prototype.Right__ = (function() {
  return this.Right__Lscala_util_Right$()
});
ScalaJS.c.scala_package$.prototype.Left__ = (function() {
  return this.Left__Lscala_util_Left$()
});
ScalaJS.c.scala_package$.prototype.Either__ = (function() {
  return this.Either__Lscala_util_Either$()
});
ScalaJS.c.scala_package$.prototype.Ordering__ = (function() {
  return this.Ordering__Lscala_math_Ordering$()
});
ScalaJS.c.scala_package$.prototype.Ordered__ = (function() {
  return this.Ordered__Lscala_math_Ordered$()
});
ScalaJS.c.scala_package$.prototype.Numeric__ = (function() {
  return this.Numeric__Lscala_math_Numeric$()
});
ScalaJS.c.scala_package$.prototype.Equiv__ = (function() {
  return this.Equiv__Lscala_math_Equiv$()
});
ScalaJS.c.scala_package$.prototype.BigInt__ = (function() {
  return this.BigInt__Lscala_math_BigInt$()
});
ScalaJS.c.scala_package$.prototype.BigDecimal__ = (function() {
  return this.BigDecimal__Lscala_math_BigDecimal$()
});
ScalaJS.c.scala_package$.prototype.Range__ = (function() {
  return this.Range__Lscala_collection_immutable_Range$()
});
ScalaJS.c.scala_package$.prototype.StringBuilder__ = (function() {
  return this.StringBuilder__Lscala_collection_mutable_StringBuilder$()
});
ScalaJS.c.scala_package$.prototype.Vector__ = (function() {
  return this.Vector__Lscala_collection_immutable_Vector$()
});
ScalaJS.c.scala_package$.prototype.$$hash$colon$colon__ = (function() {
  return this.$$hash$colon$colon__Lscala_collection_immutable_Stream$$hash$colon$colon$()
});
ScalaJS.c.scala_package$.prototype.Stream__ = (function() {
  return this.Stream__Lscala_collection_immutable_Stream$()
});
ScalaJS.c.scala_package$.prototype.$$colon$plus__ = (function() {
  return this.$$colon$plus__Lscala_collection_$colon$plus$()
});
ScalaJS.c.scala_package$.prototype.$$plus$colon__ = (function() {
  return this.$$plus$colon__Lscala_collection_$plus$colon$()
});
ScalaJS.c.scala_package$.prototype.$$colon$colon__ = (function() {
  return this.$$colon$colon__Lscala_collection_immutable_$colon$colon$()
});
ScalaJS.c.scala_package$.prototype.Nil__ = (function() {
  return this.Nil__Lscala_collection_immutable_Nil$()
});
ScalaJS.c.scala_package$.prototype.List__ = (function() {
  return this.List__Lscala_collection_immutable_List$()
});
ScalaJS.c.scala_package$.prototype.Iterator__ = (function() {
  return this.Iterator__Lscala_collection_Iterator$()
});
ScalaJS.c.scala_package$.prototype.IndexedSeq__ = (function() {
  return this.IndexedSeq__Lscala_collection_IndexedSeq$()
});
ScalaJS.c.scala_package$.prototype.Seq__ = (function() {
  return this.Seq__Lscala_collection_Seq$()
});
ScalaJS.c.scala_package$.prototype.Iterable__ = (function() {
  return this.Iterable__Lscala_collection_Iterable$()
});
ScalaJS.c.scala_package$.prototype.Traversable__ = (function() {
  return this.Traversable__Lscala_collection_Traversable$()
});
ScalaJS.c.scala_package$.prototype.AnyRef__ = (function() {
  return this.AnyRef__Lscala_Specializable()
});
/** @constructor */
ScalaJS.inheritable.scala_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_package$.prototype = ScalaJS.c.scala_package$.prototype;
ScalaJS.is.scala_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_package$)))
});
ScalaJS.as.scala_package$ = (function(obj) {
  if ((ScalaJS.is.scala_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.package")
  }
});
ScalaJS.isArrayOf.scala_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_package$)))
});
ScalaJS.asArrayOf.scala_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.package;", depth)
  }
});
ScalaJS.data.scala_package$ = new ScalaJS.ClassTypeData({
  scala_package$: 0
}, false, "scala.package$", ScalaJS.data.java_lang_Object, {
  scala_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_package$.prototype.$classData = ScalaJS.data.scala_package$;
ScalaJS.moduleInstances.scala_package = undefined;
ScalaJS.modules.scala_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_package)) {
    ScalaJS.moduleInstances.scala_package = new ScalaJS.c.scala_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_package
});
//@ sourceMappingURL=package$.js.map
