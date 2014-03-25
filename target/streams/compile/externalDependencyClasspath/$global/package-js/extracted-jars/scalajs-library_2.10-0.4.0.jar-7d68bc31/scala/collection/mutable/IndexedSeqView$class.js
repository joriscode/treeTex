ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__newFiltered__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed = (function($$this, p) {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$1().init___Lscala_collection_mutable_IndexedSeqView__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__newSliced__Lscala_collection_mutable_IndexedSeqView__Lscala_collection_generic_SliceInterval__Lscala_collection_mutable_IndexedSeqView$Transformed = (function($$this, _endpoints) {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$2().init___Lscala_collection_mutable_IndexedSeqView__Lscala_collection_generic_SliceInterval($$this, _endpoints)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__newDroppedWhile__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed = (function($$this, p) {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$3().init___Lscala_collection_mutable_IndexedSeqView__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__newTakenWhile__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed = (function($$this, p) {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$4().init___Lscala_collection_mutable_IndexedSeqView__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__newReversed__Lscala_collection_mutable_IndexedSeqView__Lscala_collection_mutable_IndexedSeqView$Transformed = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_IndexedSeqView$$anon$5().init___Lscala_collection_mutable_IndexedSeqView($$this)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__asThis__Lscala_collection_mutable_IndexedSeqView__Lscala_collection_mutable_IndexedSeqView$Transformed__Lscala_collection_mutable_IndexedSeqView = (function($$this, xs) {
  return xs
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__filter__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView = (function($$this, p) {
  return $$this.newFiltered__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed(p)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__init__Lscala_collection_mutable_IndexedSeqView__Lscala_collection_mutable_IndexedSeqView = (function($$this) {
  return $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_mutable_IndexedSeqView$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(0, ($$this.length__I() - 1)))
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__drop__Lscala_collection_mutable_IndexedSeqView__I__Lscala_collection_mutable_IndexedSeqView = (function($$this, n) {
  return $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_mutable_IndexedSeqView$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(n, $$this.length__I()))
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__take__Lscala_collection_mutable_IndexedSeqView__I__Lscala_collection_mutable_IndexedSeqView = (function($$this, n) {
  return $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_mutable_IndexedSeqView$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(0, ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(n), $$this.length__I())))
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__slice__Lscala_collection_mutable_IndexedSeqView__I__I__Lscala_collection_mutable_IndexedSeqView = (function($$this, from, until) {
  return $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_mutable_IndexedSeqView$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(from, ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(until), $$this.length__I())))
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__dropWhile__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView = (function($$this, p) {
  return $$this.newDroppedWhile__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed(p)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__takeWhile__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView = (function($$this, p) {
  return $$this.newTakenWhile__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed(p)
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__span__Lscala_collection_mutable_IndexedSeqView__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  return new ScalaJS.c.scala_Tuple2().init___O__O($$this.newTakenWhile__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed(p), $$this.newDroppedWhile__Lscala_Function1__Lscala_collection_mutable_IndexedSeqView$Transformed(p))
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__splitAt__Lscala_collection_mutable_IndexedSeqView__I__Lscala_Tuple2 = (function($$this, n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O($$this.take__I__Lscala_collection_mutable_IndexedSeqView(n), $$this.drop__I__Lscala_collection_mutable_IndexedSeqView(n))
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__reverse__Lscala_collection_mutable_IndexedSeqView__Lscala_collection_mutable_IndexedSeqView = (function($$this) {
  return $$this.newReversed__Lscala_collection_mutable_IndexedSeqView$Transformed()
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$class__$init$__Lscala_collection_mutable_IndexedSeqView__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=IndexedSeqView$class.js.map
